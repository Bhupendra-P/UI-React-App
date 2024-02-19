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
            <div style={{ height: 50 }}></div>
        </Page>
    );
}
export default SkEditFBT;