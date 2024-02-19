import {
    Page,
    Layout,
    BlockStack,
    Card, Text,
    InlineStack
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkHelp() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Need Help?"
        >
            <BlockStack gap="800">
                <Layout>
                    <Layout.Section>
                        <BlockStack gap="600">
                            <Card>
                                <BlockStack gap="300">
                                    <Text variant="headingMd" as="h6">
                                        Contact Our Support
                                    </Text>
                                    <SKCard width={500} height={0}></SKCard>
                                    <InlineStack gap="300" blockAlign="center">
                                        <SKCard width={100} height={25}></SKCard>
                                        <SKCard width={300} height={0}></SKCard>
                                    </InlineStack>
                                </BlockStack>
                            </Card>
                            <Card>
                                <BlockStack gap="300">
                                    <Text variant="headingMd" as="h6">
                                        Checkout The User Guide
                                    </Text>
                                    <SKCard width={500} height={0}></SKCard>
                                    <SKCard width={100} height={25}></SKCard>
                                </BlockStack>
                            </Card>
                            <Card>
                                <BlockStack gap="300">
                                    <Text variant="headingMd" as="h6">
                                        Rate The App
                                    </Text>
                                    <SKCard width={500} height={0}></SKCard>
                                    <SKCard width={300} height={0}></SKCard>
                                </BlockStack>
                            </Card>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section variant="oneThird"></Layout.Section>
                </Layout>
            </BlockStack>
            <div style={{ height: 50 }}></div>
        </Page>
    );
}
export default SkHelp;