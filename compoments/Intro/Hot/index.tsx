import classNames from "classnames";
import { Tabs, Spin } from "antd";
import axios from "axios";
import { HotMessageType } from "types/intro";
import { SyncOutlined } from "@ant-design/icons";
import { newsHotList } from "static/constant";
import { useEffect, useState } from "react";
import Image from "compoments/Image";
import styles from "./index.module.scss";
import cardStyles from "styles/card.module.scss";

type HotDataType = {
  [name: string]: [HotMessageType];
};
const { TabPane } = Tabs;

const Hot = () => {
  const [currentKey, setCurrentKey] = useState(newsHotList[0].name);
  const [hotData, setHotData] = useState<HotDataType>({});
  const [loading, setLoading] = useState(false);
  const queryData = async (isRefresh?: boolean) => {
    const currentHot = newsHotList.find((item) => item.name === currentKey);
    if (hotData[currentHot!.name] && !isRefresh) {
      return "";
    }
    setLoading(true);
    axios.get(currentHot!.url).then((res) => {
      setLoading(false);
      setHotData({
        ...hotData,
        [currentHot!.name]: currentHot!.tranferData(res?.data),
      });
    });
  };

  useEffect(() => {
    queryData();
  }, [currentKey]);
  console.log(hotData, "hotdata");
  return (
    <div className={classNames(cardStyles.card, styles.hot)}>
      <div className={styles.label}>
        <div className={styles.title}>热搜榜</div>
        <div className={styles.refresh} onClick={() => queryData(true)}>
          <SyncOutlined />
          <span>刷新</span>
        </div>
      </div>
      <div className={styles["list-tab"]}>
        <Tabs
          onChange={(e) => {
            setCurrentKey(e);
          }}
        >
          {newsHotList.map((item) => {
            const newsHotList = hotData[item.name] || [];
            return (
              <TabPane
                tab={
                  <span className={styles["tab-title"]}>
                    <div className={styles["tab-icon"]}>
                      <Image src={item.icon} width={16} height={16} alt="" />
                    </div>
                    {item.name}
                  </span>
                }
                key={item.name}
              >
                <Spin spinning={loading}>
                  <div className={styles["host-list"]}>
                    {newsHotList.length ? (
                      newsHotList.map((item: HotMessageType, index: number) => {
                        return (
                          <div className={styles["hot-item"]} key={item.text}>
                            <div className={styles.index}>{index + 1}</div>
                            <div className={styles.text}>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {item.text}
                              </a>
                            </div>
                            <div className={styles["hot-value"]}>
                              {item.hotValue}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Spin>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Hot;
