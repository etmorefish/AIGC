import React, { useState, useEffect } from 'react';

interface WeiBoData {
  code: number;
  message: string;
  title: string;
  subtitle: string;
  from: string;
  total: number;
  updateTime: string;
  data: {
    title: string;
    desc: string;
    hot: number;
    url: string;
    mobileUrl: string;
  }[];
}

const WeiBo = () => {
  const [data, setData] = useState<WeiBoData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${location.origin}/api/hot/weibo`, {
        method: 'POST',
      });
      const responseData: WeiBoData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const displayedData = data.data.slice(0, 15); // 仅显示前15条记录

  return (
    <div className="hot-card h-96 overflow-auto">
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <ul>
        {displayedData.map((item, index) => (
          <li key={index} className="flex items-center">
          <div
            className={`w-6 h-6 rounded-full mr-2 flex items-center justify-center ${
              index < 3
                ? `bg-red-${7-index}00 text-white` // 前三条记录红底白字，颜色递减
                : 'bg-gray-200 text-black' // 剩余记录灰底黑字
            }`}
          >
            {index + 1} {/* 序号从1开始 */}
          </div>
          <a href={item.url}>{item.title}</a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default WeiBo;
