import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/MainContent.css';

function MainContent({ selectedSection }) {
  const [selectedTags, setSelectedTags] = useState({ '饭桌': ['all'], '厨具': ['all'], '梯子': ['all']});
  const sectionRefs = useRef({});
  const [visitCount, setVisitCount] = useState('加载中...');
  const [error, setError] = useState(null);

  const fetchVisitCount = useCallback(async () => {
    const namespace = 'lancehsun.github.io';
    const key = 'fandom-tools-visits';
    
    try {
      const getResponse = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
      const getData = await getResponse.json();
      
      console.log('Initial get response:', getData);

      if (getData.value !== null) {
        const hitResponse = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        const hitData = await hitResponse.json();
        console.log('Hit response:', hitData);
        setVisitCount(hitData.value);
      } else {
        const createResponse = await fetch(`https://api.countapi.xyz/create?namespace=${namespace}&key=${key}&value=1`);
        const createData = await createResponse.json();
        console.log('Create response:', createData);
        setVisitCount(createData.value);
      }
    } catch (error) {
      console.error('Error with visit count:', error);
      setError('无法加载访问计数');
      setVisitCount('--');
    }
  }, []);

  useEffect(() => {
    fetchVisitCount();
  }, [fetchVisitCount]);

  const sections = [
    {
      title: '饭桌',
      items: [
        { name: 'Lofter', url: 'https://www.lofter.com', tags: ['好多人'] },
        { name: 'Archive of Our Own', url: 'https://archiveofourown.org', tags: ['安心的家', '梯子'] },
        { name: '微博', url: 'https://weibo.com', tags: ['社交', '吃肉'] },
        { name: 'QQ', url: 'https://qq.com', tags: ['社交', '吃肉'] },
        { name: '飞鸽博客 ', url: 'https://feigeblog.com', tags: ['新家', '社交'] },
        { name: '小红书', url: 'https://www.xiaohongshu.com', tags: ['新家'] },
        { name: '随缘居', url: 'http://mtslash.me/forum.php', tags: ['欧美圈', ] },
        { name: 'Twitter', url: 'https://twitter.com', tags: ['吃肉', '梯子'] },
        { name: 'Pixiv(P站)', url: 'https://www.pixiv.net', tags: ['图'] },
        { name: 'Tumblr', url: 'https://www.tumblr.com', tags: ['社交'] },
        
        { name: 'Popiku', url: 'https://poipiku.com', tags: ['图'] },
        { name: 'Instagram', url: 'https://www.instagram.com', tags: ['社交'] },
        { name: 'WLAND', url: 'https://hellowland.com', tags: ['独立站'] },
        { name: 'WordPress', url: 'https://www.wordpress.com', tags: ['博客', '建站'] },
        { name: '废文网', url: 'https://www.feiawen.com', tags: [] },
        { name: 'Asianfanfics', url: 'https://www.asianfanfics.com', tags: [] },
        { name: '爱发电', url: 'https://www.afdian.net', tags: ['吃肉'] },
        { name: 'Derpibooru', url: 'https://derpibooru.org', tags: [] },
        { name: 'Fanfiction.net', url: 'https://www.fanfiction.net', tags: [] },
        { name: 'Wattpad', url: 'https://www.wattpad.com', tags: [] },
        { name: '萤火圈', url: 'https://www.pgyer.com/FireFly', tags: ['社交', ] },
        { name: 'Cpp', url: 'https://cp.allcpp.cn', tags: [] },
        { name: 'Popo', url: 'https://www.popo.tw', tags: ['出版'] },
        { name: 'LiveJournal', url: 'https://www.livejournal.com', tags: [] },
        { name: 'Nitter (推特前端)', url: 'https://nitter.bgme.bid', tags: [] },
        { name: 'Postype (韩)', url: 'https://www.postype.com', tags: [] },
        { name: 'Pictbland (日本BL站)', url: 'https://pictbland.net', tags: ['BL'] },
        { name: 'Pictgland (GL站)', url: 'https://pictgland.net', tags: ['GL'] },
        { name: 'Privatter', url: 'https://privatter.net', tags: [] },
        { name: 'Poipiku (图)', url: 'https://www.poipiku.com', tags: ['图'] },
        { name: 'Waterfall', url: 'https://waterfall.slashtw.space', tags: [] },
        { name: '半次元 ', url: '', tags: ['墓碑'] },
        { name: '白熊阅读 ', url: '', tags: ['墓碑'] },
        { name: 'FanLib', url: '', tags: ['墓碑'] },
        { name: '+', url: 'https://pome.vip/eatmeat', tags: [] },
      ]

    },
    {
      title: '厨具',
      items: [
        { name: '石墨文档', url: 'https://shimo.im', tags: ['文档', '文图'] },
        { name: 'Flomo', url: 'https://flomoapp.com', tags: ['灵感'] },
        { name: '口袋写作', url: 'https://www.kdwrite.cn/#/', tags: ['写作'] },
        { name: '备忘录', url: '', tags: ['写作', '同步'] },
        { name: 'WriteFreely', url: 'https://writefreely.org', tags: ['博客', '写作'] },
        { name: 'Notion', url: 'https://www.notion.so/', tags: ['存文', '发文'] },
        { name: '+', url: 'https://pome.vip/eatmeat', tags: [] },
      ]
    },
    {
      title: '梯子',
      items: [
        { name: '+', url: 'https://pome.vip/eatmeat', tags: [] },
      ]
    },
    {
      title: '+',
      items: [] // 这个部分没有项目
    }
  ];

  const allTags = {
    '饭桌': ['all', ...new Set(sections.find(s => s.title === '饭桌').items.flatMap(item => item.tags))],
    '厨具': ['all', ...new Set(sections.find(s => s.title === '厨具').items.flatMap(item => item.tags))],
    '梯子': ['all', ...new Set(sections.find(s => s.title === '梯子').items.flatMap(item => item.tags))]
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


  return (
<div className="main-content">
      {sections.map((section, index) => (
        <div key={index} className="section" ref={el => sectionRefs.current[section.title] = el}>
          <h2>{section.title}</h2>
          {section.title !== '+' ? (
            <>
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
          </>
          ) : (
            <div className="add-section">
              <p>想要添加新板块吗？</p>
              <a href="https://pome.vip/eatmeat" target="_blank" rel="noopener noreferrer" className="add-link">
                塞一条建议
              </a>
            </div>
          )}
        </div>
      ))}
      <div className="visit-counter">
        访问量：{visitCount}
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}

export default MainContent;