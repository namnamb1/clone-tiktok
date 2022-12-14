import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false , onChange = defaultFn, ...passProps }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    }); 
  };
  return (
    <Tippy
    {...passProps}
      offset={[16,8]}
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
           <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={ () => setHistory(prev => prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
