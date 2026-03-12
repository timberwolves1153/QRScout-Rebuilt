import { Helmet } from 'react-helmet';
import { useQRScout-Rebuilt-RebuiltState } from '../store/store';

export function Header() {
  const page_title = useQRScout-Rebuilt-RebuiltState(state => state.formData.page_title);
  return (
    <Helmet>
      <title>QRScout-Rebuilt-Rebuilt | {page_title}</title>
      <link rel="icon" href="/QRScout-Rebuilt/favicon.ico" />
    </Helmet>
  );
}
