import {
    Page,
    BlockStack,
    Layout,
    Card,
    SkeletonBodyText,
    InlineStack,
    SkeletonDisplayText
} from '@shopify/polaris';

function SkOffers() {
    return (
        <Page fullWidth>
            <BlockStack align="start" gap="1000">
                <Layout>
                    <Layout.Section variant="oneHalf">
                        <Card>
                            <BlockStack gap="500">
                                <SkeletonBodyText lines={5} />
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="500">
                                <SkeletonBodyText lines={5} />
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="fullWidth">
                        <Card>
                            <InlineStack align="space-evenly" blockAlign="center" gap="400" >
                                <SkeletonDisplayText size="extraLarge" maxWidth="50%" />
                            </InlineStack>

                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
        </Page>
    );
}

export default SkOffers;