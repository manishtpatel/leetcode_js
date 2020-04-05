var _numNodes = 7, _numEdges = 7, _edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]

// Depth First Search (DFS)
//      Start with any node first
//      find first node connected
//      continue with next one
//      once no more found go back 
// Breadth First Search (BFS)
//      start with first node
//      find all nodes connected
//      go through all newly found nodes found


// DFS Sample

doDFS = () => {
    findNextNode = (edges, startNode, nodesFound) => {
        // find the first one connected
        for (const edge of edges) {
            var isMynode = startNode == edge[0]
            var nextNode = edge[1]

            if (isMynode) {
                console.log(nodesFound, nextNode)
                // did we visited this node earlier?
                if (!nodesFound.includes(nextNode)) {
                    return nextNode
                }
            }
        }

        return false
    }

    // start with any node, first one
    var _startNode = _edges[0][0]
    var _nodesFound = [_startNode]
    var _nodesTrack = [_startNode]

    while (true) {
        // Lets find next for last in the entry
        var myNode = _nodesTrack[_nodesTrack.length - 1]
        var nextNode = findNextNode(_edges, myNode, _nodesFound)

        if (nextNode) {
            _nodesFound.push(nextNode)
            _nodesTrack.push(nextNode)
        } else {
            // We didn't find anything, lest go back one
            if (_nodesTrack.pop() == undefined) {
                // if we didn't any entry then we are done
                break;
            }
        }
    }

    console.log('result', _nodesFound, _nodesTrack)
}



// BFS Search

//  start with any node
//  find all connected node
//  start going with all found

doBFS = () => {
    findAllNewConnectedNodes = (node, allConnectedNodes) => {
        var retVal = []

        for (const x of _edges) {
            var isMyEdge = x[0] == node

            // filter only for myedges
            if (isMyEdge) {
                var connectedNode = x[1]

                // is not new node
                if (!allConnectedNodes.includes(connectedNode)) {
                    retVal.push(connectedNode)
                }
            }
        }

        return retVal
    }

    var _firstNode = _edges[0][0]
    var _allConnectedNodes = [_firstNode]
    var _nodestoTraverse = [_firstNode]

    while (true) {
        var popNode = _nodestoTraverse.shift()

        if (typeof popNode == 'undefined') break

        var newNodes = findAllNewConnectedNodes(popNode, _allConnectedNodes)

        if (newNodes.length > 0) {
            _allConnectedNodes = [..._allConnectedNodes, ...newNodes]
            _nodestoTraverse = [..._nodestoTraverse, ...newNodes]
        }
    }

    console.log(_allConnectedNodes)
}

// doBFS()
doDFS()