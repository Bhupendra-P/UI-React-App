import {
    Page,
    Layout,
    BlockStack,
    Card, Text,
    InlineStack
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkSettings() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Settings"
        >
            <BlockStack gap="1000">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={250} height={0}></SKCard>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap={"1000"}>
                                <InlineStack align="space-between">
                                    <Text variant="headingMd" as="h6">
                                        Frequently Baught Together
                                    </Text>
                                    <InlineStack gap="300" blockAlign="center">
                                        <SKCard width={100} height={0}></SKCard>
                                        <SKCard width={70} height={25}></SKCard>
                                    </InlineStack>
                                </InlineStack>
                                <SKCard width={300} height={0}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={250} height={0}></SKCard>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="1000">
                                <InlineStack align="space-between">
                                    <Text variant="headingMd" as="h6">
                                        Cart Add-On
                                    </Text>
                                    <InlineStack gap="300" blockAlign="center">
                                        <SKCard width={100} height={0}></SKCard>
                                        <SKCard width={70} height={25}></SKCard>
                                    </InlineStack>
                                </InlineStack>
                                <SKCard width={300} height={0}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={250} height={0}></SKCard>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="500">
                                <Text variant="headingMd" as="h6">
                                    Custom CSS
                                </Text>
                                <SKCard width={920} height={0}></SKCard>
                                <SKCard width={400} height={0}></SKCard>
                                <SKCard width={920} height={200}></SKCard>
                                <SKCard width={90} height={30}></SKCard>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: 50 }}></div>
        </Page>
    );
}
export default SkSettings;