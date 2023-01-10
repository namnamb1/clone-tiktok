import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Views profile",
    to: "/@hoaa",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Setting",
    to: "/settings",
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Logout",
    to: "/logout",
    separate: true,
  },
];

function Header() {
	const currentUser = true;

	const handleMenuChange = (menuItem) => {
		switch (menuItem.type) {
		case "language":
			break;
		default:
		}
	};

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="tiktok" />
        </Link>
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} trigger="click" content="upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3e8b5a21fbde60046e2ed074ba24cd39~c5_100x100.jpeg?x-expires=1667980800&x-signature=V%2BR%2Fm2S6GMqlF363n3oGZsB7u%2Bg%3D"
                alt=""
                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/58bd66d62a096246c188245cc9b9d00a~c5_100x100.jpeg?x-expires=1668049200&x-signature=ZqzV9SDJMjvmVubaGNRdV1%2BgW%2B4%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
