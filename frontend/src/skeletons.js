import { Page, Card, Layout } from '@shopify/polaris';

function Skeletons() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Skeleton Pages (Intermediate Loaders)"
        // primaryAction={{ content: 'Save' }}
        >
            <Layout>
                <Layout.Section variant="oneHalf">
                    <Card title="Skeleton Pages"></Card>
                </Layout.Section>
                <Layout.Section></Layout.Section>
            </Layout>

        </Page>
    );
}

export default Skeletons;