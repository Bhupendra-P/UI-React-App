import { Page, Card, Layout, Link, BlockStack } from '@shopify/polaris';

function Skeletons() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Skeleton Pages (Intermediate Loaders)"
        // primaryAction={{ content: 'Save' }}
        >
            <Layout>
                <Layout.Section variant="oneHalf">
                    <Card title="Skeleton Pages">
                        <BlockStack gap="200">
                            <Link removeUnderline url='/sk_offers'>Offers</Link>
                            <Link removeUnderline url='/skeletons'>Add Offer</Link>
                            <Link removeUnderline url='/skeletons'>Offer Setup</Link>
                            <Link removeUnderline url='/skeletons'></Link>
                            <Link removeUnderline url='/skeletons'>Edit Widgets</Link>
                        </BlockStack>
                    </Card>
                </Layout.Section>
                <Layout.Section></Layout.Section>
            </Layout>

        </Page>
    );
}

export default Skeletons;