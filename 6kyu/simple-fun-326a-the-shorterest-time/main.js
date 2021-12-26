// https://www.codewars.com/kata/5953c6f8af7ac14fd4000021

downTimeToBaseFloorWithElevator = ({ current, speeds }) => {
  let waitOpenDoorTime = speeds[1]
  let waitCloseDoorTime = speeds[2]
  let downTime = current * speeds[0]
  let exitTime = speeds[1]
  return waitOpenDoorTime + waitCloseDoorTime + downTime + exitTime
}

walkingTimeToAnyFloor = ({ current, target, speed }) => {
  return Math.abs(target - current) * speed
}

withElevatorTime = ({ theFloorOfJohn, theFloorOfElevator, speeds }) => {
  if (theFloorOfJohn == 0) return theFloorOfJohn
  let waitTime = Math.abs(theFloorOfElevator - theFloorOfJohn) * speeds[0]
  return waitTime + downTimeToBaseFloorWithElevator({ current: theFloorOfJohn, speeds: speeds })
}

withWalkingAndElevatorTime = ({ theFloorOfJohn, theFloorOfElevator, speeds }) => {
  if (theFloorOfJohn == 0) return theFloorOfJohn
  let walkingTime = walkingTimeToAnyFloor({ current: theFloorOfJohn, target: theFloorOfElevator, speed: speeds[3] })
  return walkingTime + downTimeToBaseFloorWithElevator({ current: theFloorOfElevator, speeds: speeds })
}

function shorterestTime(n, m, speeds) {
  return Math.min(walkingTimeToAnyFloor({ current: n, target: 0, speed: speeds[3] }), withElevatorTime({ theFloorOfJohn: n, speeds: speeds, theFloorOfElevator: m }), withWalkingAndElevatorTime({ theFloorOfJohn: n, speeds: speeds, theFloorOfElevator: m }));
}


console.log(shorterestTime(4, 5, [1, 2, 3, 10]), 12);
console.log(shorterestTime(0, 5, [1, 2, 3, 10]), 0);
console.log(shorterestTime(4, 4, [1, 2, 3, 10]), 11);
console.log(shorterestTime(1, 1, [1, 2, 3, 10]), 8);
console.log(shorterestTime(1, 1, [2, 3, 4, 10]), 10);
console.log(shorterestTime(4, 3, [1, 2, 3, 10]), 12);
console.log(shorterestTime(4, 3, [2, 3, 4, 5]), 20);
console.log(shorterestTime(7, 6, [3, 1, 1, 4]), 25);


