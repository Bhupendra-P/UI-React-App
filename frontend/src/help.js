//From Shopify-Polaris
import {
    Page,
    BlockStack,
    CalloutCard,
    Card,
    Text,
    Link,
    Layout
} from '@shopify/polaris';


function Help() {



    return (
        <Page fullWidth backAction={{ content: 'offersPage', url: '/offers' }} // Clarify
            title="Need Help?">
            <Layout>
                <Layout.Section>
                    <BlockStack gap="600">
                        <div>
                            <CalloutCard
                                title="Contact Our Support"
                                //illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                                primaryAction={{
                                    content: 'Chat With Us',
                                    url: '#',
                                }}
                                secondaryAction={{ content: 'Email to support@risingsigma.com', url: 'mailto:support@risingsigma.com' }}
                            >
                                <p>We can answer your queries and assist with customizing the app to suit your theme.</p>
                            </CalloutCard>
                        </div>
                        <div>
                            <CalloutCard
                                title="Checkout the User Guide"
                                //illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                                primaryAction={{
                                    content: 'View User Guide',
                                    url: '/userguide',
                                }}
                            >
                                <p>Our User Guide has step by steps instructions on how to setup and use the app.</p>
                            </CalloutCard>
                        </div>
                        <div>
                            <Card>
                                <Text variant="headingMd" as="h6">
                                    Rate the App
                                </Text>
                                <p>
                                    Your reviews keep our small team motivated to make the app even better.
                                </p>
                                <Link removeUnderline url="https://apps.shopify.com/Unnamed_Upsell_App">Rate us on the Shopify App Store &#128151; </Link>
                            </Card>
                        </div>
                    </BlockStack>
                </Layout.Section>
                {/* Space reserved - For advertising purposes of other Rising Sigma apps viz. Zippy and Magic Menu  */}
                <Layout.Section variant="oneThird">
                </Layout.Section>
            </Layout>
        </Page>
    );
};

export default Help;