// DFS: Depth First Search
// BFS: Breadth First Search

// DFS (keep finding then go back)

var _edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]

_doDFS = () => {
    // start with any node
    startNode = _edges[0][0]
    allNodesFound = [startNode]
    nodesStack = [startNode]

    // find next new node
    findNewNode = (node) => {
        for (const x of _edges) {
            if (x[0] == node) {
                var nextNode = x[1]
                var isNew = !allNodesFound.includes(nextNode)

                if (isNew) {
                    return nextNode
                }
            }
        }

        return false
    }

    while (true) {
        var node = nodesStack[nodesStack.length - 1]
        var nextNode = findNewNode(node)

        if (nextNode) {
            allNodesFound.push(nextNode)
            nodesStack.push(nextNode)
        } else {
            if (nodesStack.pop() == undefined) {
                break
            }
        }
    }

    return allNodesFound
}

_doBFS = (firstNode = _edges[0][0], exclude = []) => {
    // start with first node already added
    allNodesFound = [firstNode]
    nodesTrack = [firstNode]

    findAllConnectedNodes = (node) => {
        var retVal = []

        // go through edges and find connected nodes
        for (const x of _edges) {
            // is it connected node
            if (x[0] == node) {
                var nextNode = x[1]
                var isNewNode = allNodesFound.includes(nextNode)
                var isExcluded = exclude.includes(nextNode)

                // not excluded and not already added
                if (!isNewNode && !isExcluded) {
                    // add into return list as this is new node found
                    retVal.push(nextNode)
                }
            }
            // is it connected node, could be bidirectional, so check 1 also, same logic as 0, as long as our node is in the edge it is connected
            if (x[1] == node) {
                var nextNode = x[0]
                var isNewNode = allNodesFound.includes(nextNode)
                var isExcluded = exclude.includes(nextNode)

                if (!isNewNode && !isExcluded) {
                    retVal.push(nextNode)
                }
            }
        }

        return retVal
    }

    while (true) {
        // grab first node fifo, we will add new nodes as we find, process all in fifo order
        var node = nodesTrack.shift()

        // no more nodes mean, we exhaused all nodes
        if (node == undefined) break

        // find connected nodes for our node
        var nextNodes = findAllConnectedNodes(node)

        // add newly found nodes in allnodesfound, and nodestrack to find its connections
        nodesTrack = [...nodesTrack, ...nextNodes]
        allNodesFound = [...allNodesFound, ...nextNodes]
    }

    // our result
    return allNodesFound
}

findFirstNode = (excludes = []) => {
    for (const x of _edges) {
        if (!excludes.includes(x[0])) {
            return x[0]
        }
        if (!excludes.includes(x[1])) {
            return x[1]
        }
    }
}

findAllArticulationPoints = () => {
    var allNodes = _doBFS()
    var retVal = []

    for (const node of allNodes) {
        var resultNodes = _doBFS(findFirstNode([node]), [node])

        console.log(resultNodes)

        // we expect only our excluded node to be missing if everything is still connected
        if (resultNodes.length < allNodes.length - 1) {
            retVal.push(node)
        }
    }

    console.log(retVal)
}

findAllArticulationPoints()
