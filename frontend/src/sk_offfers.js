import {
    Page,
    BlockStack,
    Layout,
    Card,
    SkeletonBodyText,
    SkeletonDisplayText,
    TextContainer
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
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText lines={2} />
                            </TextContainer>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="fullWidth">
                        <Card>
                            <SkeletonBodyText lines={14} />

                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
        </Page>
    );
}

export default SkOffers;