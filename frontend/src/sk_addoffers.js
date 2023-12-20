import { Layout, SkeletonBodyText, SkeletonPage, BlockStack } from '@shopify/polaris';

function SkAddOffers() {
    return (
        <SkeletonPage primaryAction fullWidth backAction>
            <BlockStack gap="1200">
                <Layout>
                    <Layout.Section variant="oneThird">
                        <SkeletonBodyText lines={2} />
                    </Layout.Section>
                    <Layout.Section>
                        <BlockStack gap="500">


                        </BlockStack>
                    </Layout.Section>
                </Layout>
            </BlockStack>

        </SkeletonPage>

    );
}

export default SkAddOffers;