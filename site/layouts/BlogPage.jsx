import React from 'react';
import { Moment, PrevNext } from 'antwar-helpers';

import articleClasses from './Article.scss';

const BlogPage = ({ page }) => (
  <div>
    <div className={articleClasses.article}>
      {page.headerImage ?
        <div
          className={articleClasses.headerImage}
          style={{
            backgroundImage: `url(${page.headerImage})`
          }}
        /> :
        null
      }
      <header className={articleClasses.header}>
        <h1>
          {page.title}
          {page.isDraft ?
            <span className={articleClasses.draftText}>Draft</span> :
            null
          }
        </h1>
        {page.author ?
          <div className={articleClasses.author}>{`Authored by ${page.author}`}</div> :
          null
        }
        {page.date ?
          <Moment className={articleClasses.date} datetime={page.date} /> :
          null
        }
      </header>
      {page.headerExtra ?
        <div
          className="header-extra"
          dangerouslySetInnerHTML={{ __html: page.headerExtra }}
        /> :
        null
      }
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <PrevNext page={page} previousText="Previous post" nextText="Next post" />
    </div>
  </div>
);

export default BlogPage;
