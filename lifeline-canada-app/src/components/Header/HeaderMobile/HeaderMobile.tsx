/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderMobileView } from './mobile-components/HeaderMobileView';
import { useMenuState } from '../../../hooks/useMenuState';

export default function HeaderMobile() {
  const menuState = useMenuState();

  return <HeaderMobileView {...menuState} />;
}
