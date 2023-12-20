import {
    Page,
    BlockStack,
    Layout,
    Card,
    SkeletonBodyText,
    SkeletonDisplayText,
    TextContainer,
    Spinner,
    Box,
    Text,
    InlineStack
    // InlineStack
} from '@shopify/polaris';

function SkOffers() {

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
            <BlockStack align="start" gap="1000">
                <Layout>
                    <Layout.Section variant="oneHalf">
                        <Card>
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText />
                            </TextContainer>
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
                            <BlockStack gap="500">
                                <InlineStack gap="100" align="start" blockAlign="baseline">
                                    <Text variant="headingXl" as="h4">Summary</Text>
                                    <Text alignment="end" variant="bodySm" tone="subdued">(Current Month)</Text>
                                </InlineStack>
                                <InlineStack align="space-around" gap="400">
                                    <Box background="bg-surface-brand" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                                        <Placeholder label="" />
                                    </Box>
                                    <Box background="bg-surface-brand" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                                        <Placeholder label="" />
                                    </Box>
                                    <Box background="bg-surface-brand" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                                        <Placeholder label="" />
                                    </Box>
                                    <Box background="bg-surface-brand" borderRadius="300" shadow="100" padding="500" minWidth="260px" minHeight="140px">
                                        <Placeholder label="" />
                                    </Box>
                                </InlineStack>
                                <Layout>
                                    <Layout.Section variant="oneThird">
                                        <SkeletonBodyText lines={2} />
                                    </Layout.Section>
                                    <Layout.Section></Layout.Section>
                                </Layout>

                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <Layout>
                    <Layout.Section variant="fullWidth">
                        <Card>
                            <BlockStack gap="500">
                                <Text variant="headingXl" as="h4">Offers</Text>
                                <SkeletonBodyText lines={3}></SkeletonBodyText>
                            </BlockStack>
                        </Card>
                    </Layout.Section>
                </Layout>
            </BlockStack>
        </Page>
    );
}
export default SkOffers;