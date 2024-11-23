// Level 0
type TStatusRoot = 'OPEN' | 'CLOSED';
// Level 1
type TStatusOpen = 'PREPARING' | 'ONGOING' | 'CONCLUDING';
type TStatusClosed = 'FINISHED' | 'CANCELED' | 'DELETED';
// Level 2
type TStatusPreparing = 'INSPECTING' | 'LOADING' | 'ODOMETER';
type TStatusOngoing = 'MOVING' | 'STOPPED';
type TStatusConcluding = 'ODOMETER' | 'REVIEW';
// Level 3
type TStatusStopped = 'PATIENT' | 'BREAK' | 'LUNCH' | 'GAS' | 'EMERGENCY' | 'OTHER';

// All Statuses
type TAllStatuses =
  | TStatusRoot
  | TStatusOpen
  | TStatusClosed
  | TStatusPreparing
  | TStatusOngoing
  | TStatusConcluding
  | TStatusStopped;

// Any Status Sequence
type TAnyStatusSequence = TAllStatuses[];

type TCorrectStatusSequence =
  | ['OPEN']
  | ['OPEN', 'PREPARING']
  | ['OPEN', 'PREPARING', 'INSPECTING']
  | ['OPEN', 'PREPARING', 'LOADING']
  | ['OPEN', 'PREPARING', 'ODOMETER']
  | ['OPEN', 'ONGOING']
  | ['OPEN', 'ONGOING', 'MOVING']
  | ['OPEN', 'ONGOING', 'STOPPED']
  | ['OPEN', 'ONGOING', 'STOPPED', 'VISIT']
  | ['OPEN', 'ONGOING', 'STOPPED', 'BREAK']
  | ['OPEN', 'ONGOING', 'STOPPED', 'LUNCH']
  | ['OPEN', 'ONGOING', 'STOPPED', 'GAS']
  | ['OPEN', 'ONGOING', 'STOPPED', 'EMERGENCY']
  | ['OPEN', 'ONGOING', 'STOPPED', 'OTHER']
  | ['OPEN', 'CONCLUDING']
  | ['OPEN', 'CONCLUDING', 'ODOMETER']
  | ['OPEN', 'CONCLUDING', 'REVIEW']
  | ['CLOSED']
  | ['CLOSED', 'FINISHED']
  | ['CLOSED', 'CANCELLED']
  | ['CLOSED', 'DELETED'];

type SequenceHintProvider<T extends unknown[], A> = Extract<A, T> extends never
  ? T extends [...infer T, unknown]
    ? SequenceHintProvider<T, A>
    : A
  : Extract<A, T>;

function makeStatusSequence<T extends unknown[]>(...args: SequenceHintProvider<T, TCorrectStatusSequence>) {
  return args as TAnyStatusSequence;
}

export default makeStatusSequence;