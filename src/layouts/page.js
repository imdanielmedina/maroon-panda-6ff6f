import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { markdownify } from '../utils';
import { markdownify2 } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const markdownContent = _.get(page, 'markdown_content');
        const markdownContent2 = _.get(page, 'markdown_content2');

        return (
            <Layout page={page} config={config}>
                <article className="page py-5 py-sm-6">
                    <div className="container container--medium">
                        {title && <header className="page__header"><h1 className="page__title">{title}</h1></header>}
                        {markdownContent && <div className="page__body text-block">{markdownify(markdownContent)}</div>}
                        {markdownContent2 && <div className="page__body text-block">{markdownify(markdownContent2)}</div>}
                    </div>
                </article>
            </Layout>
        );
    }
}
