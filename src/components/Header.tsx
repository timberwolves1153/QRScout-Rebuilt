import { Helmet } from 'react-helmet';
import { useQRScout-RebuiltState } from '../store/store';

export function Header() {
  const page_title = useQRScoutState(state => state.formData.page_title);
  return (
    <Helmet>
      <title>QRScout | {page_title}</title>
      <link rel="icon" href="/QRScout-Rebuilt/favicon.ico" />
    </Helmet>
  );
}
