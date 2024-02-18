import { Page, Card } from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkOfferSetup() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Offer Setup"
            primaryAction={{ content: 'Save' }}
        >
            <SKCard width={300} height={200}>
            </SKCard>
        </Page>
    );
}
export default SkOfferSetup;