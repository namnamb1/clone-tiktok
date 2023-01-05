import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    
    const handleHideResult = () => {
        setShowResult(false);
    };

return (
    <HeeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
            </PopperWrapper>
            </div>
        
        )}
        onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
            ref={inputRef}
            value={searchValue}
            placeholder="search..."
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus = {() => {setShowResult(true); console.log(searchResult.length);}}
        />
        {!!searchValue && (
            <button className={cx("clear")} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        )}
        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
        <button className={cx("search-btn")}>
            <SearchIcon />
        </button>
      </div>
    </HeeadlessTippy>
  );
}

export default Search;
