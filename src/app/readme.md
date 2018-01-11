```ts
            var appendTestData = Common.appendTestData,
                // 记录一个最新
                maxDataSize = 30,
                listDom = document.querySelector('#listdata'),
                requestDelayTime = 600;

            var miniRefresh = new MiniRefresh({
                container: '#minirefresh',
                // 设置为 false 原生滚动条可以滑动
                isLockX: false,
                down: {
                    callback: function() {
                        setTimeout(function() {
                            // 每次下拉刷新后，上拉的状态会被自动重置
                            appendTestData(listDom, 10, true);
                            miniRefresh.endDownLoading(true);
                        }, requestDelayTime);
                    }
                },
                up: {
                    isAuto: true,
                    callback: function() {
                        setTimeout(function() {
                            appendTestData(listDom, 4);
                            miniRefresh.endUpLoading(listDom.children.length >= maxDataSize ? true : false);
                        }, requestDelayTime);
                    }
                }
            });

```