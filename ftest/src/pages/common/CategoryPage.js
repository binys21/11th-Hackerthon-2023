import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import Hospital from '../../components/category_comp/Hospital';
import Surgery from '../../components/category_comp/Surgery';
// Data
import { filterSlice, setFilter } from "../../redux/filterSlice";
import {useSelector,useDispatch} from "react-redux";

import { hospitalData } from '../../_mock/hospitalData';

//image
import underbar from "../../pages/images/underbar.png";



const CategoryPage=()=>{
    const categories = ["진단", "약물처방", "수술"];


    //filterSlice의 filter 받아오기, dispatch 사용 선언
    const { filter } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //dispatch 사용 => 카테고리 변경 저장하는 saveCategory함수
    const saveCategory = (e) => {
      // console.log(filter);
        dispatch(
          setFilter({
                filter: e.target.id,
            })
        );
        
    };
    //카테고리 별로 이동하는 페이지를 다르게 하는 함수 
    // const navigateToDetail = () => {
    //   if(filter=="진단"){
    //     navigate("/historydetail");
    //   }
    //   else if(filter=="약물처방"){
    //     navigate("/drugdatail");
    //   }
    //   else{
    //     navigate("/surgerydetail");
    //   }
    
    // };

   
    //선택한 카테고리와 일치하는 병원데이터만 받아서 저장 (filter 함수 사용)
    const hospitalList = hospitalData.filter((hospital)=>hospital.category == filter);


    return (
        <>
          <Wrapper>
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
              <br></br>
              <TopWrapper>
              <Number>총 5건</Number>
              <SelectBox>
              <select>
                <option key="latest" value="latest">최근순</option>
                <option key="older" value="older">오래된순</option>
               </select>
              </SelectBox>
              </TopWrapper>

              <HospitalList>
                {hospitalList.map((hospital) => (
                  <Hospital hospital={hospital} />
                ))}
                 {hospitalList.map((hospital) => (
                  <Surgery hospital={hospital} />
                ))}

              </HospitalList>
              
            </Container>
          </Wrapper>
        </>
      );

};
export default CategoryPage;

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #202329;
`;
const Container = styled.div`
width: 80%;
max-width: 300px;
display: flex;
flex-direction: column;
`;
const FilterBar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-style: none none solid none;
  border-bottom: solid 1px #cedff9;
`;
const Category = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.checked ? "#ffffff" : "#9b9b9b")};

  background-image: ${(props) => (props.checked ? `url(${underbar})` : "none")};
  background-repeat: no-repeat;
  background-position: bottom;
`;
const HospitalList = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px; 
`;
const Number=styled.div`
  color:white;
  font-size:14px;
  display:flex;
  justify-content:flex-start;
  margin-left:24px;
`;

const SelectBox = styled.div`
    margin-left:180px;
    width: 56.33px;
    height:17px;
    background-color: transparent;
    color:#175DF9;
`;
const TopWrapper=styled.div`
  display:flex;
  justify-contents:space-between;
`;