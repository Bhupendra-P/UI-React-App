import {
    BlockStack,
    Layout,
    Page,
    Banner,
    Text,
    Link
} from '@shopify/polaris';

function CartAddOn() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Cart Add-ons"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}
        >
            <Banner
            // onDismiss={() => { }}
            >
                <Text variant="bodyLg" as="p">
                    The cart page product addons might not display if your theme uses a cart drawer. Please contact via live chat or email to <Link url="mailto:support@risingsigma.com" removeUnderline>support@risingsigma.com</Link> for resolving this.
                </Text>
            </Banner>
            <BlockStack gap='600'>
                <Layout>

                </Layout>

            </BlockStack>
        </Page>
    );
}

export default CartAddOn;