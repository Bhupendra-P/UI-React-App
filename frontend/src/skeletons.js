import {
    Page,
    Card,
    Layout,
    Link,
    BlockStack
} from '@shopify/polaris';

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
                            <Link removeUnderline url='/sk_addoffers'>Add Offer</Link>
                            <Link removeUnderline url='/sk_offersetup'>Offer Setup</Link>
                            <Link removeUnderline url='/sk_help'>help</Link>
                            <Link removeUnderline url='/sk_editfbt'>EditFBT</Link>
                            <Link removeUnderline url='/sk_cartaddon'>CartAddOn</Link>
                            <Link removeUnderline url='/skeletons'>Settings</Link>
                        </BlockStack>
                    </Card>
                </Layout.Section>
                <Layout.Section></Layout.Section>
            </Layout>

        </Page>
    );
}

export default Skeletons;