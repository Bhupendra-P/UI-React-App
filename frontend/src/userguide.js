import { Page, Card } from '@shopify/polaris';

function UserGuide() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="General"
            primaryAction={{ content: 'Save' }}
        >
            <Card title="Credit card">
                <p>Credit card information</p>
            </Card>
        </Page>
    );
}

export default UserGuide;