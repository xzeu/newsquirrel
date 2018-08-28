import { connect } from 'react-redux';
import { compose, mapProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from 'redux';
import { canLoadUrlInIframe, closeArticle, showArticle } from '../actions/creators';
import ArticleCard from '../components/news-stand/article-card';
import NewsStandSize from '../enums/newsStandSize';
import { IAppState } from '../models/view/IAppState';
import { IArticleCard } from '../models/view/IArticleCard';


const mapStateToProps = (state: IAppState) => ({
  size: state.options.newsStandSize
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkArticleUrl: (id: string, url: string) => dispatch(canLoadUrlInIframe(id, url)),
  closeDetailedArticle: () => dispatch(closeArticle()),
  showDetailedArticle: (url: string) => dispatch(showArticle(url)),
});

interface ILocalState {
  imageLoaded: boolean;
  thumbnailUrl: string;
  selectedUrl: string;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onImageLoaded: StateHandler<T>;
  showArticle: StateHandler<T>;
  checkArticle: StateHandler<T>;
}

const initialState = ({imageLoaded = false, thumbnailUrl}: ILocalState) => ({
  imageLoaded: thumbnailUrl && thumbnailUrl !== '' ? imageLoaded : true,
  selectedUrl: '',
  thumbnailUrl: thumbnailUrl !== null ? thumbnailUrl : '',
});

const stateHandlers = {
  checkArticle: (state: any, {checkArticleUrl}: IProps) => (url: string, id: string) => {
    checkArticleUrl(id, url);
    return {};
  },
  closeArticle: (state: ILocalState, {closeDetailedArticle}: IProps) => () => {
    closeDetailedArticle();
    return {};
  },
  onImageLoaded: ({imageLoaded}: ILocalState) => () => ({
    imageLoaded: true
  }),
  showArticle: (state: ILocalState, {showDetailedArticle}:IProps) => (url: string) => {
    showDetailedArticle(url);
    return {
      selectedUrl: url,
    }
  },
}

interface IProps {
  size: NewsStandSize;
  showDetailedArticle: (url: string) => void;
  closeDetailedArticle: () => void;
  checkArticleUrl: (id: string, url: string) => void;
  articleUrl: string;
  id: string;
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps((props: IProps & IArticleCard) => {
    return props
  }),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
)(ArticleCard)