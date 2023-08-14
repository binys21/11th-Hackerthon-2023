import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//component
import Hospital from "../../components/category_comp/Hospital";
import Surgery from "../../components/category_comp/Surgery";
import Pharmacy from "../../components/category_comp/Pharmacy";
// Data
import { filterSlice, setFilter } from "../../redux/filterSlice";
import { useSelector, useDispatch } from "react-redux";

import { hospitalData } from "../../_mock/hospitalData";
import Header from "../../components/Header";
//image
import underbar from "../../pages/images/underbar.png";
import select_btn from "../../pages/images/select_btn.png";

const CategoryPage = () => {
    const categories = ["진단", "약물처방", "수술"];

    //filterSlice의 filter 받아오기, dispatch 사용 선언
    const { filter } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //dispatch 사용 => 카테고리 변경 저장하는 saveCategory함수
    const saveCategory = (e) => {
        dispatch(
            setFilter({
                filter: e.target.id,
            })
        );
    };

    //선택한 카테고리와 일치하는 병원데이터만 받아서 저장 (filter 함수 사용)
    const hospitalList = hospitalData.filter(
        (hospital) => hospital.category == filter
    );

    const [isMoreView, setIsMoreView] = useState(false); // 더보기 & 접기 상태 저장

    const onClickImageMoreViewButton = () => {
        setIsMoreView(!isMoreView);
    }; // 클릭시 상태 반전

    return (
        <>
            <Back>
                <Wrapper>
                    <Header title="진료 기록 조회"></Header>

                    <Container>
                        <FilterBar>
                            {categories.map((category) => (
                                <Category
                                    id={category}
                                    checked={filter === category}
                                    onClick={saveCategory}
                                >
                                    {category}
                                </Category>
                            ))}
                        </FilterBar>
                        <div class="line"></div>
                        <br />
                        <TopWrapper>
                            <Number>총 5건</Number>
                            <SelectBox>
                                <select>
                                    <option key="latest" value="latest">
                                        최근순
                                    </option>
                                    <option key="older" value="older">
                                        오래된순
                                    </option>
                                </select>
                                <img src={select_btn} />
                            </SelectBox>
                        </TopWrapper>
                        <HospitalList>
                            {hospitalList.map((hospital) =>
                                filter === "진단" ? (
                                    <Hospital hospital={hospital} />
                                ) : filter === "약물처방" ? (
                                    <Pharmacy hospital={hospital} />
                                ) : filter === "수술" ? (
                                    <Surgery
                                        hospital={hospital}
                                        isMoreView={isMoreView}
                                        onClickImageMoreViewButton={
                                            onClickImageMoreViewButton
                                        }
                                    />
                                ) : null
                            )}
                        </HospitalList>
                    </Container>
                </Wrapper>
            </Back>
        </>
    );
};
export default CategoryPage;
const Back = styled.div`
    background: #202329;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #202329;
`;
const Container = styled.div`
    position: absolute;
    top: 13%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .line {
        border-style: none none solid none;
        border-bottom: solid 2px #4c4e53;
    }
`;
const FilterBar = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    padding-left: 30px;
`;
const Category = styled.div`
    width: 33%;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.checked ? "#ffffff" : "#4c4e53")};
    background-image: ${(props) =>
        props.checked ? `url(${underbar})` : "none"};
    background-repeat: no-repeat;
    background-position: bottom;
    padding-bottom: 15px;
`;
const TopWrapper = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`;
const Number = styled.div`
    color: white;
    font-size: 12px;
    display: flex;
`;
const SelectBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 12px;
        height: 8px;
    }
    select {
        width: 45px;
        padding: 0.8em 0.5em;
        font-size: 13px;
        color: #175df9;
        border: none;
        background-color: transparent;
        background: "url(${select_btn})" no-repeat 95% 50%;
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0;
    }
    select::-ms-expand {
        display: none;
    }
`;
const HospitalList = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    padding-top: 8%;
`;
