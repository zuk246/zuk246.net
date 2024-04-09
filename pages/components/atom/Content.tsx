import { ReactNode } from 'react';

type Props = {
    title?: string | ReactNode;
    subtitle?: string;
    className?: string;
    children?: ReactNode;
};

export default function Content(props: Props) {
    return (
        <div className={props.className}>
            {typeof props.title === 'string' ? (
                <h2 className='text-3xl font-bold'>{props.title}</h2>
            ) : (
                props.title
            )}
            <p className='text-default-600 mt-2'>{props.subtitle}</p>
            <div className='mt-8'>{props.children}</div>
        </div>
    );
}
