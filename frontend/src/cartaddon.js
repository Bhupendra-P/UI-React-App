import {
    Page,
} from '@shopify/polaris';

function CartAddOn() {
    return (
        <Page fullWidth
            backAction={{ content: 'Settings', url: '#' }}
            title="Cart Add-ons"
            primaryAction={{ content: 'Save', variant: "primary", tone: "success" }}
        >
        </Page>
    );
}

export default CartAddOn;