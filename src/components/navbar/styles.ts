import Styled from 'styled-components';
import Acorn from './acorn.svg';

import ReadingMode from '../../enums/readingMode';
import ViewPort from '../../enums/viewPort';

const Wrapper = Styled.nav `
  min-height: 80px;
  background: #EEF3F5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #2B2D42;
`;

const NavBrand = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 1.5rem;
  margin-right: auto;
  color:  linear-gradient(to right, rgba(217,4,40,1) 0%, rgba(43,45,66,1) 70%, rgba(43,45,66,1) 100%);
`;

const NavBrandText = Styled.span<{vwPort: ViewPort}>`
  font-size: ${p => p.vwPort === ViewPort.DESK ? '2rem' : '1.75rem'};
  font-weight: 500;
  color: #EF233C;
  padding-bottom:3px;
  white-space: nowrap;
  text-transform: uppercase;
`;

const CountryDropdownWrapper = Styled.div<{mode: ReadingMode, vwPort: ViewPort}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: ${p => p.vwPort === ViewPort.DESK ? 'auto' : ''};
  font-size: ${p => p.vwPort === ViewPort.MOB ? '1.5rem' : ''};
`;

const SearchbarWrapper = Styled.div<{mode: ReadingMode, vwPort: ViewPort}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  margin-right: ${p => p.vwPort === ViewPort.DESK ? 'auto' : ''};
`;

const ReadmodeWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlagWrapper = Styled.div`
  position: absolute;
  top: -13px;
  right: -1px;
`;

const Logo = Styled.div`
  background: url(${Acorn});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  width: 30px;
  height: 30px;
  margin-left: 4px;
`;

export {
  Wrapper,
  NavBrand,
  NavBrandText,
  CountryDropdownWrapper,
  SearchbarWrapper,
  ReadmodeWrapper,
  FlagWrapper,
  Logo
}