import React from "react";
import _ from "lodash";
import styled from "styled-components";

const ScheduleGridCell = styled.div`
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);

  &:nth-child(4n + 1) {
    border-top-width: 1px;
  }

  &:first-child {
    border-top-width: 2px;
  }

  &:last-child {
    border-bottom-width: 2px;
  }
`;

const ScheduleGridColumn = styled.div`
  display: contents;

  &:first-child ${ScheduleGridCell} {
    border-left-width: 2px;
  }

  &:last-child ${ScheduleGridCell} {
    border-right-width: 2px;
  }
`;

const ScheduleGrid = styled.div`
  display: contents;
`;

const ScheduleVerticalHeader = styled.div`
  display: contents;
`;

const ScheduleVerticalHeaderCell = styled.div`
  border-width: 1px 0 1px 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding: 2px 4px 0 0;
  font-size: 0.8rem;

  &:first-child {
    border-top-width: 2px;
  }

  &:last-child {
    border-bottom-width: 2px;
  }
`;

const ScheduleHorizontalHeader = styled.div`
  display: contents;
`;

const ScheduleHorizontalHeaderCell = styled.div`
  border-width: 2px 1px 0 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child {
    border-left-width: 2px;
  }

  &:last-child {
    border-right-width: 2px;
  }
`;

const ScheduleCard = styled.div`
  background: #dcc7a2;
  border: 1px solid #a97700;
  margin: 3px 4px;
`;

export const Schedule: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px repeat(52, 15px)",
        gridTemplateColumns: "50px repeat(10, 1fr)",
      }}
    >
      <ScheduleGrid>
        {_.times(5).map((column) => (
          <ScheduleGridColumn>
            {_.times(52).map((row) => (
              <ScheduleGridCell
                style={{
                  gridRow: row + 2,
                  gridColumn: `${column * 2 + 2} / ${(column + 1) * 2 + 2}`,
                }}
              />
            ))}
          </ScheduleGridColumn>
        ))}
      </ScheduleGrid>

      <ScheduleVerticalHeader>
        {_.times(13).map((row) => (
          <ScheduleVerticalHeaderCell
            style={{
              gridRow: `${row * 4 + 2} / ${(row + 1) * 4 + 2}`,
              gridColumn: 1,
            }}
          >
            {(8 + row).toString().padStart(2, "0")}:00
          </ScheduleVerticalHeaderCell>
        ))}
      </ScheduleVerticalHeader>

      <ScheduleHorizontalHeader>
        {["Poniedzia??ek", "Wtorek", "??roda", "Czwartek", "Pi??tek"].map(
          (day, column) => (
            <ScheduleHorizontalHeaderCell
              style={{
                gridRow: 1,
                gridColumn: `${column * 2 + 2} / ${(column + 1) * 2 + 2}`,
              }}
            >
              <div style={{ fontSize: "0.8rem" }}>{day}</div>
              <div style={{ fontWeight: 600 }}>
                {(column + 1).toString().padStart(2, "0")}.01.2023
              </div>
            </ScheduleHorizontalHeaderCell>
          )
        )}
      </ScheduleHorizontalHeader>

      <ScheduleCard
        style={{
          gridRow: "3 / 10",
          gridColumn: 2,
        }}
      />
      <ScheduleCard
        style={{
          gridRow: "11 / 14",
          gridColumn: 2,
        }}
      />
      <ScheduleCard
        style={{
          gridRow: "11 / 22",
          gridColumn: 3,
        }}
      />
    </div>
  );
};
