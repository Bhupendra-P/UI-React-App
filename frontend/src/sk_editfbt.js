import {
    Page,
    Layout,
    BlockStack,
    Card,
    Text,
    InlineStack
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkEditFBT() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Frequently Baught Together"
            primaryAction={{ content: 'Save' }}
        >
            <BlockStack gap="1000">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={180} height={0}></SKCard>
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
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={180} height={0}></SKCard>
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
                        <BlockStack gap="300">
                            <SKCard width={90} height={25}></SKCard>
                            <SKCard width={180} height={0}></SKCard>
                        </BlockStack>
                    </Layout.Section>
                    <Layout.Section>
                        <Card>
                            <BlockStack gap="500">
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
                                <SKCard width={120} height={0}></SKCard>
                                <SKCard width={920} height={30}></SKCard>
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