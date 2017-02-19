// common - shared constants, types and functions for veclib
// Part of Stardazed
// (c) 2015-2017 by Arthur Langereis - @zenmumbler
// https://github.com/stardazed/veclib

// augment Math class
interface Math {
	sign(n: number): number;
}


namespace veclib {

// constants
export const EPSILON = 0.000001;


// functions
export function clamp(n: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, n));
}

export function clamp01(n: number): number {
	return Math.max(0.0, Math.min(1.0, n));
}

export function mix(a: number, b: number, ratio: number): number {
	return a * (1 - ratio) + b * ratio;
}


// interfaces and types
export interface MutableArrayLike<T> {
	readonly length: number;
	[n: number]: T;
}

export type ArrayOfConstNumber = ArrayLike<number>;
export type ArrayOfNumber = MutableArrayLike<number>;

export interface TypedArrayBase {
	subarray(start: number, end: number): this;
};

// specialized types waiting for some kind of fixed-length array checking to surface in TS one day...
export type Float2 = ArrayOfNumber;
export type Float3 = ArrayOfNumber;
export type Float4 = ArrayOfNumber;

export type Float2x2 = ArrayOfNumber;
export type Float3x3 = ArrayOfNumber;
export type Float4x4 = ArrayOfNumber;

export type ConstFloat2 = ArrayOfConstNumber;
export type ConstFloat3 = ArrayOfConstNumber;
export type ConstFloat4 = ArrayOfConstNumber;

export type ConstFloat2x2 = ArrayOfConstNumber;
export type ConstFloat3x3 = ArrayOfConstNumber;
export type ConstFloat4x4 = ArrayOfConstNumber;


// (strided) iteration of vecN types
export interface VecArrayIterationOptions {
	stride?: number;
	offset?: number;
	count?: number;
}

export type VecArrayIterationFunction = (out: ArrayOfNumber, a: ArrayOfConstNumber, ...args: any[]) => void;

} // ns veclib
