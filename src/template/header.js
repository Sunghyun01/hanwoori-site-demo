import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch,faBell } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  return (
    <>
        <div className={'header'}>
            <div className={'row'}>
                <div className={'col-3'}>
                    header
                </div>
                <div className={'col-6'}>
                    <div className={"col-auto"}>
                        <div className={"input-group mb-2"}>
                            <div className={"input-group-prepend"}>
                                <div className={"input-group-text"}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                            <input type="text" className={"form-control"} placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className={'col-3'}>
                    <span className={'badge badge-pill badge-primary dropdown-toggle'} id={"noti_dropdown"} data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>
                        <FontAwesomeIcon icon={faBell} /> 4
                    </span>
                    <div className={"dropdown-menu dropdown-menu-right"} aria-labelledby="noti_dropdown">
                        <button className={"dropdown-item"} type="button">Action</button>
                        <button className={"dropdown-item"} type="button">Another action</button>
                        <button className={"dropdown-item"} type="button">Something else here</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
 
export default Header;