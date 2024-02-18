import { Page, Layout, BlockStack, Card, Text } from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkOfferSetup() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Offer Setup"
            primaryAction={{ content: 'Save' }}
        >
            <Layout>
                <Layout.Section variant="oneThird">
                    <BlockStack gap={200}>
                        <SKCard width={90} height={30}></SKCard>
                        <SKCard width={150} height={0}></SKCard>
                    </BlockStack>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <BlockStack gap="400">
                            <Text variant="headingMd" as="h6">Placement</Text>
                            <SKCard width={150} height={0}></SKCard>
                            <Text variant="headingMd" as="h6">Type</Text>
                            <SKCard width={150} height={0}></SKCard>
                            <Text variant="bodySm" tone="subdued">Displays an Amazon style frequently bought together bundle on the product page.
                                For example, if you sell Burgers, you can bundle French Fries along with it.</Text>
                        </BlockStack>
                    </Card>
                </Layout.Section>
            </Layout>
            {/* <SKCard width={300} height={200}>
            </SKCard> */}
        </Page>
    );
}
export default SkOfferSetup;