import { LayoutArguments } from '../Core/SmartTypes';
import CardLayout from '../Layouts/CardLayout';

const LayoutBuilder = (args: LayoutArguments) => {
    const getLayout = () => {
        switch (args.section.type) {
            case 'SECTION_WITH_HEADER':
                return <CardLayout section={args.section} component={args.component} />;
            default:
                return args.component;
        }
    };

    return <div className={`d-flex flex-wrap ${args.section.className}`}>{getLayout()}</div>;
};

export default LayoutBuilder;
