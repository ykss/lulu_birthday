import React from "react";
import styled from "styled-components";

const Typography = styled.p`
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 30px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

function Contents() {
  return (
    <ContentsWrapper>
      <h2>초대의 글</h2>
      <Typography>
        애기 같던 루루가 <br />
        어느새 벌써 네 살이 되었습니다! <br /> 루루의 생일을 축하하고자
        <br />
        작게나마 파티를 준비했습니다.
        <br />
        파티에 오셔서 루루의 생일을 축하해주세요!
        <br />
        <br /> 루루의 생일을 기다리며
        <br />
        루루 언니, 루루 오빠가
      </Typography>
    </ContentsWrapper>
  );
}

export default Contents;
