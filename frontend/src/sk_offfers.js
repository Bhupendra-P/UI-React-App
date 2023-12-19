import { Page, Card } from '@shopify/polaris';

function SkOffers() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="General"
            primaryAction={{ content: 'Save' }}
        >
            <Card title="Credit card">
                <p>UserGuide Alag se banega ..isme nahi</p>
            </Card>
        </Page>
    );
}

export default SkOffers;