import {
    Page,
    Layout,
    Card,
    // SkeletonBodyText,
    BlockStack,
    Text,
    Box,
    SkeletonBodyText,
    InlineStack,
    Button
} from '@shopify/polaris';
import SKCard from './skeletoncard';

function SkAddOffers() {
    const Placeholder = ({ label = '', height = 'auto', width = 'auto' }) => {
        return (
            <div
                style={{
                    background: 'var(--p-color-border-interactive-subdued)',
                    height: height,
                    width: width,
                    borderRadius: 'inherit',
                }}
            >
                <div
                    style={{
                        color: 'var(--p-color-text)',
                    }}
                >
                    <Text as="p" variant="bodyMd">
                        {label}
                    </Text>
                </div>
            </div>
        );
    };


    return (
        <Page fullWidth>
            <div style={{ height: '20px' }}></div>
            <Layout>
                <Layout.Section variant="oneThird">
                    <BlockStack gap="050">
                        <Text variant="headingMd" as="h6">Upsell Type</Text>
                        <Text variant="bodyMd" tone="subdued">Select an upsell type</Text>
                    </BlockStack>
                </Layout.Section>
                <Layout.Section>
                    <BlockStack gap="400">
                        <Card>
                            <BlockStack gap="600">
                                <Text variant="headingMd">Placement</Text>
                                <InlineStack gap="300">
                                    <SKCard width={180} height={35}></SKCard>
                                    <SKCard width={130} height={35}></SKCard>
                                </InlineStack>
                                <Text variant="headingMd">Type</Text>
                                <InlineStack gap="300">
                                    <SKCard width={240} height={35}></SKCard>
                                    <SKCard width={150} height={35}></SKCard>
                                </InlineStack>
                                <Box background="bg-surface-brand" borderRadius="200" shadow="100" padding="500" minWidth="20px" minHeight="300px" maxWidth="auto">
                                    <Placeholder label="" />
                                </Box>
                                <SkeletonBodyText lines={2} />
                            </BlockStack>
                        </Card>
                        <InlineStack align="end">
                            <Button variant="primary" size="large" tone="success" url="/offersetup">Proceed To Setup Offer</Button>
                        </InlineStack>
                    </BlockStack>
                </Layout.Section>
            </Layout>
            <div style={{ height: '25px' }}> </div>

        </Page>

    );
}

export default SkAddOffers;