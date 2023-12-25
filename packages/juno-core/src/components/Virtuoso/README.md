# react-virtuoso

This project fork from [react-virtuoso](https://github.com/petyosi/react-virtuoso.git)

# How to update ?

1. sync fork for https://github.com/HaoZhouInRC/react-virtuoso

2. git clone `git@github.com:HaoZhouInRC/react-virtuoso.git` in your machine

3. checkout target branch from tags, for example `git checkout -b origin-x.x.x tags/vx.x.x`

4. merge branch `juno` into target branch, `git merge juno`

5. conflict resolution and push target branch

6. create a pull request to branch `juno`

7. copy src folder to `rcui/packages/juno-core/src/components/Virtuoso/react-virtuoso`

## Conflict resolution principles

Code style-related changes should follow the original repository

Only necessary (usually with window, document) modifications

# Update log

## 2023-12-25

### v4.6.2

https://github.com/HaoZhouInRC/react-virtuoso/tree/juno-4.6.2

### Compare

https://github.com/HaoZhouInRC/react-virtuoso/pull/23

## Older

### v2.8.6

SHA: 02f188051767d52e47a527bbdce39f61a140a51e

always keep sync with original source, we extends that for support custom `window instance`.
