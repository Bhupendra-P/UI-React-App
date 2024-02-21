import {
    Page,
    Layout,
    BlockStack,
    Card,
    Text,
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkEditFBT() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Frequently Baught Together"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}
        >
            <BlockStack gap="1000">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Position
                            </Text>
                            <Text as="p" tone="subdued">
                                Set your widget position.
                            </Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Widget Positioning</Text>
                                <SKCard width={190} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Settings
                            </Text>
                            <Text as="p" tone="subdued">
                                Customize offers displayed in this widget.
                            </Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <Text variant="headingMd" as="h6">Widget Positioning</Text>
                                <SKCard width={190} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="100">
                            <Text variant="headingMd" as="h6">
                                Text and Translation
                            </Text>
                            <Text as="p" tone="subdued">
                                Customize text and translations.
                            </Text>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="400">
                                <BlockStack gap="100">
                                    <Text>Widget Title</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                                <BlockStack gap="100">
                                    <Text>Total Price Label</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                                <BlockStack gap="100">
                                    <Text>Add To Cart Button Label</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                                <BlockStack gap="100">
                                    <Text>This Item Label</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                                <BlockStack gap="100">
                                    <Text>Discount Label</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                                <BlockStack gap="100">
                                    <Text>Cart Page Discount Message</Text>
                                    <SKCard width={920} height={30}></SKCard>
                                </BlockStack>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: 50 }}></div>
        </Page>
    );
}
export default SkEditFBT;