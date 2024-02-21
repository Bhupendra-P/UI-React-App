import { Page, Layout, BlockStack, Card, Text } from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkOfferSetup() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Offer Setup"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success", size: "large" }}
        >
            <BlockStack gap="1000">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Upsell Type</Text>
                            <Text variant="bodyMd" tone="subdued">Select an offer</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Placement</Text>
                                <SKCard width={150} height={0}></SKCard>
                                <Text variant="headingMd" as="h6">Type</Text>
                                <SKCard width={150} height={0}></SKCard>
                                <SKCard width={900} height={0}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>

                <Layout>

                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Trigger</Text>
                            <Text variant="bodyMd" tone="subdued">Select the products that triggers the offer</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Offer is triggered for</Text>
                                <SKCard width={150} height={0}></SKCard>
                                <SKCard width={190} height={0}></SKCard>
                                <SKCard width={150} height={30}></SKCard>
                                <SKCard width={900} height={0}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>

                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Offer Products</Text>
                            <Text variant="bodyMd" tone="subdued">Select the products to upsell/cross-sell</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Select the products to upsell</Text>
                                <SKCard width={150} height={30}></SKCard>
                                <SKCard width={650} height={0}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>

                </Layout>
                <Layout>

                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">Discount</Text>
                            <Text variant="bodyMd" tone="subdued">Setup bundle discount for product page upsell</Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Select discount type</Text>
                                <SKCard width={150} height={0}></SKCard>
                                <SKCard width={180} height={0}></SKCard>
                                <SKCard width={280} height={30}></SKCard>
                                <SKCard width={320} height={30}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: 50 }}></div>
            {/* <SKCard width={300} height={200}>
            </SKCard> */}
        </Page>
    );
}
export default SkOfferSetup;