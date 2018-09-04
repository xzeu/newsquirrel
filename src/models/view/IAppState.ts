import { AxiosResponse } from 'axios';
import { AppMode } from './../../enums/appMode';

import NewsStandSize from '../../enums/newsStandSize';
import ReadingMode from '../../enums/readingMode';
import { IDateFilter } from './../data/IDateFilter';
import { IArticleCard } from './IArticleCard';


interface IThumbnail {
  media: {
    height: number;
    width: number;
  },
  href: string;
}

interface ILogo {
  media: {
    height: number;
    width: number;
  },
  href: string;
}

interface ILinks {
  thumbnail: IThumbnail[];
  logo: ILogo[];
}

export interface IFrameData {
  url: string;
  meta: {
    date: string;
    description: string;
    site: string;
    author: string;
    title: string;
  };
  links: ILinks;
}

export interface INewsState {
  topHeadlines: IArticleCard[];
  newsArticles: IArticleCard[];
  totalResults: number;
  selectedCountry: string;
  searchResultsCount: number;
  headlinesCount: number;
  isAppBusy: boolean;
  readingMode: ReadingMode;
  failureResponse: AxiosResponse | null;
  sortByTime: ISortBy[];
  activeSortByTime: ISortBy;
  quickViewEnabled: boolean;
  quickViewData: IFrameData | {};
  quickViewUrl: string;
  quickViewLoading: boolean;
  pocketConfig: IPocketState;
}

export interface ICountry {
  name: string;
  value: string;
}

export interface ISortBy {
  name: string;
  value: string;
}

export interface IAppMode{
  name: string;
  value: AppMode;
}

export interface IOptionsState {
  pageSize: number;
  activePage: number;
  defaultCountries: ICountry[];
  defaultCategories: string[];
  filter: {
    categories: string[]
  },
  sortBy: ISortBy[];
  currentlySortingBy: ISortBy;
  searchingFor: string;
  newsStandSize: NewsStandSize;
  dateFilter: IDateFilter;
  detailedPaneOpen: boolean;
  detailedArticleUrl: string;
  defaultAppMode: IAppMode;
  availableAppModes: IAppMode[];
}

export interface IPocketState {
  requestToken: string;
  accessToken: string;
}

export interface IAppState {
  categories: string[];
  news: INewsState;
  options: IOptionsState
}
