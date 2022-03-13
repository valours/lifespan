import { FC } from "react";
import styled from "styled-components";

import { chunck, decade, getLifeByYear } from "../domain";

const CalendarByYear: FC = () => {
  const life = getLifeByYear();

  return (
    <CalendarByYearStyled>
      <h1>Human Life in Years</h1>
      <Calendar>
        {chunck(life)
          .per(decade)
          .map((decade) => (
            <Line key={decade.join("")}>
              {decade.map((year) => (
                <Bloc key={year}>{year}</Bloc>
              ))}
            </Line>
          ))}
      </Calendar>
    </CalendarByYearStyled>
  );
};

const CalendarByYearStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Calendar = styled.div``;

const Line = styled.div`
  display: flex;
`;

const Bloc = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  text-align: center;
  line-height: 30px;
  background: grey;
`;

export default CalendarByYear;
