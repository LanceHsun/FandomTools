import React, { useState, useEffect, useRef } from 'react';
import '../styles/MainContent.css';

function MainContent({ selectedSection }) {
  const [selectedTags, setSelectedTags] = useState({ '饭桌': ['all'], '厨具': ['all'] });
  const sectionRefs = useRef({});
  const [visitCount, setVisitCount] = useState(0);

  const sections = [
    {
      title: '饭桌',
      items: [
        { name: '飞鸽博客 ', url: 'https://feigeblog.com', tags: ['新家', '社交'] },
        { name: '微博', url: 'https://weibo.com', tags: ['社交', '吃肉'] },
        { name: 'QQ', url: 'https://qq.com', tags: ['社交', '吃肉'] },
        { name: '小红书', url: 'https://www.xiaohongshu.com', tags: ['新家'] },
        { name: 'Lofter', url: 'https://www.lofter.com', tags: ['好多人'] },
        { name: '抖音', url: 'https://www.douyin.com', tags: ['视频', ] },
        { name: 'Twitter', url: 'https://twitter.com', tags: ['吃肉', '梯子'] },
        { name: 'Pixiv(P站)', url: 'https://www.pixiv.net', tags: ['图'] },
        { name: 'Tumblr', url: 'https://www.tumblr.com', tags: ['社交'] },
        { name: 'Archive of Our Own (AO3)', url: 'https://archiveofourown.org', tags: ['安心的家', '梯子'] },
        { name: 'Popiku', url: 'https://poipiku.com', tags: ['艺术', '插画'] },
        { name: 'Instagram', url: 'https://www.instagram.com', tags: ['社交', '图片'] },
        { name: 'WLAND', url: 'https://hellowland.com', tags: ['独立站'] },
        { name: '半次元 ', url: '', tags: ['墓碑'] },
        { name: '白熊阅读 ', url: '', tags: ['墓碑'] },
        { name: 'FanLib', url: '', tags: ['墓碑'] },
        { name: 'WordPress', url: 'https://www.wordpress.com', tags: ['博客', '建站'] },
        { name: '废文网', url: 'https://www.feiawen.com', tags: [] },
        { name: 'Asianfanfics', url: 'https://www.asianfanfics.com', tags: [] },
        { name: '爱发电 (Afdian)', url: 'https://www.afdian.net', tags: ['众筹', '吃肉'] },
        { name: 'Derpibooru', url: 'https://derpibooru.org', tags: ['图片', '同人'] },
        { name: 'Fanfiction.net', url: 'https://www.fanfiction.net', tags: ['同人', '文学'] },
        { name: 'Wattpad', url: 'https://www.wattpad.com', tags: ['文学', '社交'] },
        { name: '萤火圈', url: 'https://www.pgyer.com/FireFly', tags: ['社交', '同人'] },
        { name: 'Cpp', url: 'https://cp.allcpp.cn', tags: [] },
        { name: 'Popo', url: 'https://www.popo.tw', tags: ['文学', '出版'] },
        { name: 'LiveJournal', url: 'https://www.livejournal.com', tags: [] },
        { name: 'Nitter (推特前端)', url: 'https://nitter.bgme.bid', tags: [] },
        { name: 'Postype (韩国网站)', url: 'https://www.postype.com', tags: [] },
        { name: 'Pictbland (日本BL站)', url: 'https://pictbland.net', tags: ['BL'] },
        { name: 'Pictgland (GL站)', url: 'https://pictgland.net', tags: ['GL'] },
        { name: 'Privatter', url: 'https://privatter.net', tags: [] },
        { name: 'Poipiku (插画网站)', url: 'https://www.poipiku.com', tags: ['艺术', '插画'] },
        { name: 'Episode', url: 'https://www.episode.cc', tags: ['游戏', '互动故事'] },
        { name: 'Waterfall', url: 'https://waterfall.slashtw.space', tags: [] },

      ]

    },
    {
      title: '厨具',
      items: [
        { name: '石墨文档 (Shimo Docs)', url: 'https://shimo.im', tags: ['文档', '协作'] },
        { name: 'flomo', url: 'https://flomoapp.com', tags: ['笔记', '思维'] },
        { name: '口袋写作 (Pocket Writing)', url: 'https://www.kdwrite.cn/#/', tags: ['写作', '创作'] },
        { name: '备忘录', url: '', tags: ['笔记', '便签'] },
        { name: 'WriteFreely', url: 'https://writefreely.org', tags: ['博客', '写作'] }
      ]
    }
  ];

  const allTags = {
    '饭桌': ['all', ...new Set(sections.find(s => s.title === '饭桌').items.flatMap(item => item.tags))],
    '厨具': ['all', ...new Set(sections.find(s => s.title === '厨具').items.flatMap(item => item.tags))]
  };

  useEffect(() => {
    if (sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection].scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSection]);

  const handleItemClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleTagClick = (section, tag) => {
    setSelectedTags(prev => {
      if (tag === 'all') {
        return { ...prev, [section]: ['all'] };
      } else {
        const newTags = prev[section].includes(tag)
          ? prev[section].filter(t => t !== tag)
          : [...prev[section].filter(t => t !== 'all'), tag];
        return { ...prev, [section]: newTags.length ? newTags : ['all'] };
      }
    });
  };

  const isItemVisible = (item, section) => {
    if (selectedTags[section].includes('all')) return true;
    return item.tags.some(tag => selectedTags[section].includes(tag));
  };

  useEffect(() => {
    // 获取访问量
    fetch('https://api.countapi.xyz/hit/your-fan-website-url/visits')
      .then(response => response.json())
      .then(data => setVisitCount(data.value))
      .catch(error => console.error('Error fetching visit count:', error));
  }, []);


  return (
    <div className="main-content">
      {sections.map((section, index) => (
        <div key={index} className="section" ref={el => sectionRefs.current[section.title] = el}>
          <h2>{section.title}</h2>
          <div className="tag-selector">
            {allTags[section.title].map(tag => (
              <button
              key={tag}
              className={`tag ${selectedTags[section.title].includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(section.title, tag)}
              data-tag={tag}  // 添加这一行来设置 data-tag 属性
            >
                {tag}
              </button>
            ))}
          </div>
          <div className="items-grid">
            {section.items.filter(item => isItemVisible(item, section.title)).map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className={`item ${item.url ? '' : 'disabled'}`} 
                onClick={() => handleItemClick(item.url)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="visit-counter">
        访问量：{visitCount}
      </div>
    </div>
  );
}

export default MainContent;