
$(window).on('load', function () {
    $.getJSON('./src/data/csvData.json', function (csvData) {
      $.getJSON('./src/data/filters.json', function (filters) {
        $.getJSON('./src/data/referenceData.json', function (referenceData) {
          let topColHeight = 'auto';
          let sideColWidth = 'auto';
          const metaProperties = ["Title", "Authors", "Year", "ParentTitle", "Volume", "Issue", "Pages", "URL", "DOI"];
          const about = "<div><!--block-->The purpose of this Evidence and Gap Map (EGM) is to provide easy access to the available evidence on&nbsp; the effectiveness of Interventions in improving the lives of those who experience, or are at risk of experiencing, homelessness.&nbsp;<br><br>The map is a table or matrix which provides a visual presentation of the evidence. In the homelessness map the rows are intervention categories and the columns are indicator categories. Indicators have sub-categories. For example, the employment indicator has three sub-categories: (1) employment status (paid and unpaid work), (2) earned income, and (3) forced labour and sex work. The map has four version Bubble, heat, donut&nbsp; and Mosaic which are self-explanatory.<br><br>The map shows both impact evaluations and systematic reviews. Impact evaluations are studies using quantitative approaches to measure what difference the programme made to outcomes like housing stability. Systematic reviews are studies which summarise all available relevant evidence for a particular issue or question. Systematic reviews which summarise evidence from impact evaluations are called ‘effectiveness reviews’<br><br>This EGM also identifies key ‘gaps’, cells which do not have any bubbles, indicates there no evidence.<br><br>This map was commissioned by the Centre for Homelessness Impact and created in partnership by Campbell Collaboration and Centre for Homelessness Impact.</div>";
          const submitStudy = "<div><!--block-->Do you know of any impact evaluations for homelessness that are missing from the map?<br><br>Please let us know by emailing hello@homelessnessimpact.org with a link to the study.<br><br></div>";
          const segmentAttributes = [
            {
                "attribute": {
                    "AttributeSetId": 5414315,
                    "AttributeId": 504,
                    "AttributeSetDescription": "",
                    "AttributeType": "Selectable (show checkbox)",
                    "AttributeName": "Estudio de metodos mixtos",
                    "AttributeDescription": ""
                },
                "color": "#E22222"
            },
            {
                "attribute": {
                    "AttributeSetId": 5414325,
                    "AttributeId": 507,
                    "AttributeSetDescription": "",
                    "AttributeType": "Selectable (show checkbox)",
                    "AttributeName": "Observacional",
                    "AttributeDescription": ""
                },
                "color": "#75C127"
            },
            {
              "attribute": {
                  "AttributeSetId": 5414325,
                  "AttributeId": 509,
                  "AttributeSetDescription": "",
                  "AttributeType": "Selectable (show checkbox)",
                  "AttributeName": "Revisión Sistemática con Metaanálisis",
                  "AttributeDescription": ""
              },
              "color": "#FF33DF"
          },
          {
            "attribute": {
                "AttributeSetId": 5414325,
                "AttributeId": 510,
                "AttributeSetDescription": "",
                "AttributeType": "Selectable (show checkbox)",
                "AttributeName": "Revisión Sistemática",
                "AttributeDescription": ""
            },
            "color": "#FF5333"
        },
            {
                "attribute": {
                    "AttributeSetId": 54143351,
                    "AttributeId": 506,
                    "AttributeSetDescription": "",
                    "AttributeType": "Selectable (show checkbox)",
                    "AttributeName": "Experimento controlado aleatorizado",
                    "AttributeDescription": ""
                },
                "color": "#24A1CE"
            },
            {
              "attribute": {
                  "AttributeSetId": 54143352,
                  "AttributeId": 508,
                  "AttributeSetDescription": "",
                  "AttributeType": "Selectable (show checkbox)",
                  "AttributeName": "Revisión Sistemática",
                  "AttributeDescription": ""
              },
              "color": "#75FF33"
          },
          {
            "attribute": {
                "AttributeSetId": 5414335,
                "AttributeId": 505,
                "AttributeSetDescription": "",
                "AttributeType": "Selectable (show checkbox)",
                "AttributeName": "Evaluación económica",
                "AttributeDescription": ""
            },
            "color": "#DBFF33"
        },
        {
          "attribute": {
              "AttributeSetId": 54143353,
              "AttributeId": 501,
              "AttributeSetDescription": "",
              "AttributeType": "Selectable (show checkbox)",
              "AttributeName": "Cuasi-experimento",
              "AttributeDescription": ""
          },
          "color": "#3379FF"
      },
      {
        "attribute": {
            "AttributeSetId": 54143354,
            "AttributeId": 502,
            "AttributeSetDescription": "",
            "AttributeType": "Selectable (show checkbox)",
            "AttributeName": "Ensayo clínico",
            "AttributeDescription": ""
        },
        "color": "#B933FF"
    },
          {
            "attribute": {
                "AttributeSetId": 54143356,
                "AttributeId": 503,
                "AttributeSetDescription": "",
                "AttributeType": "Selectable (show checkbox)",
                "AttributeName": "Estudio cualitativo",
                "AttributeDescription": ""
            },
            "color": "#FFBD33"
        }
        ]
          const summaryAttribute = "";
          const checkboxCheckedSvg = '<svg id="checked" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>' +
            '</svg>';
          const checkboxUncheckedSvg = '<svg id="unchecked" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '</svg>';
          const checkboxIndeterminateSvg = '<svg id="indeterminate" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            '<defs>' +
            '<path d="M0 0h24v24H0z" id="a"/>' +
            '</defs>' +
            '<clipPath id="b">' +
            '<use overflow="visible" xlink:href="#a"/>' +
            '</clipPath>' +
            '<path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>' +
            '</svg>';
          const radioCheckedSvg = '<svg id="checked" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '</svg>';
          const radioUncheckedSvg = '<svg id="unchecked" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '</svg>';
          const arrowUpSvg = '<svg class="btnRowCollapse" id="arrowUp" fill="#000000" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '</svg>';
          const arrowDownSvg = '<svg class="btnRowCollapse" id="arrowDown" fill="#000000" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>' +
            '<path fill="none" d="M0 0h24v24H0V0z"/>' +
            '</svg>';
          const arrowLeftSvg = '<svg class="btnColCollapse" id="arrowLeft" fill="#000000" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>' +
            '<path fill="none" d="M0 0h24v24H0V0z"/>' +
            '</svg>';
          const arrowRightSvg = '<svg class="btnColCollapse" id="arrowRight" fill="#000000" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>' +
            '<path fill="none" d="M0 0h24v24H0V0z"/>' +
            '</svg>';
  
          const $window = $(window);
          const $pivotTable = $('.pivot-table');
          const $pivotBody = $('.body');
          const $topHead = $('.top-head');
          const $topHeadTable = $('table', $topHead);
          const $topHeadWrapper = $('.top-head-wrapper');
          const $sideHead = $('.side-head');
          const $sideHeadTable = $('table', $sideHead);
          const $footer = $('.footer');
          const $menu = $('.menu');
          const $veil = $('.veil');
          const $reader = $('.reader');
  
          let $header = $('.header');
          let chartType = 'bubble';
  
          /**
           * Gets the colour for the headings.
           * @param stepNumber
           * @returns {number}
           */
          function getLightness(stepNumber) {
            let base = 24;
            let steps = 5;
            let step = 8;
  
            // stops a step being greater than 5
            stepNumber = stepNumber % steps;
            return base + (step * stepNumber);
          }
  
          /**
           * Builds the table used as the column headers of the pivot table.
           */
          function buildTableColHead() {
            let tableHeadHtml = '';
            let rowClass = '';
            let styles = [];
  
            for (let i = 0; i < csvData.totalColDepth; i++) {
              let cellClass = '';
  
              if (i > 0 && (i + 1) < csvData.totalColDepth) {
                rowClass = 'header-can-hide'
              } else if ((i + 1) === csvData.totalColDepth) {
                cellClass = 'clickable-col'
                rowClass = ''
              } else {
                rowClass = ''
              }
  
              const row = csvData.rows[i];
              tableHeadHtml += '<tr class="' + rowClass + '">';
  
              for (let j = 0; j < row.length; j++) {
                const col = row[j];
                const colSpan = i === 0 && j === 0 ? csvData.totalColBreadth : col.span;
  
                let style = '';
  
                if (i === 1) {
                  style = 'style="background-color:hsla(170, 45%,' + getLightness(j) + '%, 1)"';
  
                  for (let k = 0; k < colSpan; k++) {
                    styles.push(style);
                  }
                }
  
                if (i > 1) {
                  style = styles[j];
                }
  
                let data = '';
  
                if (cellClass === 'clickable-col') {
                  data = ' data-id="' + col.id + '"'
                }
  
                tableHeadHtml += '<th class="' + cellClass + '" colspan="' + colSpan + '"' + style + data + '>';
                tableHeadHtml += '<div>';
  
                if (i === 1) {
                  tableHeadHtml += arrowLeftSvg;
                  tableHeadHtml += arrowRightSvg;
                }
  
                tableHeadHtml += '<span>';
                tableHeadHtml += col.title;
                tableHeadHtml += '</span></div>';
                tableHeadHtml += '</th>'
              }
  
              tableHeadHtml += '</tr>';
            }
  
            $('table thead', $topHead).append(tableHeadHtml);
            topColHeight = $('table', $topHead).height();
            $('table', $topHead).height(topColHeight);
          }
  
          /**
           * Builds the table used as the row headers of the pivot table.
           */
          function buildTableRowHead() {
            let tableHeadHtml = '';
            let rowClass = '';
            let lightnessLevel = 0;
            let backgroundStyle = '';
  
            for (let i = csvData.totalColDepth; i < csvData.rows.length; i++) {
              const row = csvData.rows[i];
              tableHeadHtml += '<tr>';
  
              for (let j = 0; j < row.length; j++) {
                const col = row[j];
                const rowSpan = i === csvData.totalColDepth && j === 0 ? csvData.totalRowBreadth : col.span;
                const level = csvData.totalColDepth - row.length + j;
  
                if (level === 1) {
                  lightnessLevel += 1;
                  backgroundStyle = 'background-color:hsla(170, 45%,' + getLightness(lightnessLevel) + '%, 1)';
                }
  
                if (level > 0 && (level + 1) < csvData.totalColDepth) {
                  rowClass = 'header-can-hide vertical-text'
                } else if ((level + 1) === csvData.totalColDepth) {
                  rowClass = 'clickable-row vertical-text'
                } else {
                  rowClass = 'vertical-text'
                }
  
                let data = '';
  
                if (rowClass === 'clickable-row vertical-text') {
                  data = ' data-id="' + col.id + '"'
                }
  
                tableHeadHtml += '<th class="level-' + level + ' ' + rowClass + '" rowspan="' + rowSpan + '" style="' + backgroundStyle + '"' + data + '>';
                tableHeadHtml += '<div>';
  
                if (level === 1) {
                  tableHeadHtml += arrowUpSvg;
                  tableHeadHtml += arrowDownSvg;
                }
  
                tableHeadHtml += '<span>';
                tableHeadHtml += col.title;
                tableHeadHtml += '</span></div>';
                tableHeadHtml += '</th>'
              }
  
              tableHeadHtml += '</tr>';
            }
  
            $('table tbody', $sideHead).append(tableHeadHtml);
            sideColWidth = $('table', $sideHead).width();
            $('table', $sideHead).width(sideColWidth);
          }
  
          /**
           * Creates the table rows of the pivot tables.
           */
          function buildTableRows() {
            let tableRowHtml = '';
            const cols = csvData.rows[csvData.totalColDepth - 1]
  
            for (let i = csvData.totalColDepth +1; i < csvData.rows.length; i++) {
              const row = csvData.rows[i];
              tableRowHtml += '<tr>';
  
              for (let j = 0; j < cols.length; j++) {
                const col = cols[j];
                const rowId = row[row.length - 1].id
  
                tableRowHtml += '<td class="cell" ' +
                  'data-colid="' + col.id + '" ' +
                  'data-rowid="' + rowId + '">' +
                  '</td>';
              }
  
              tableRowHtml += '</tr>';
            }
  
            $('table tbody', $pivotBody).html(tableRowHtml);
          }
  
          /**
           * Gets references that match the given row and column lists.
           * @param rowIdList
           * @param colIdList
           * @returns {Array}
           * @constructor
           */
          function GetFilteredReferences(rowIdList, colIdList) {
            const references = [];
            const refMatches = referenceData
              .filter((reference) => {
                if (!reference.hasOwnProperty('Codes')) return false;
  
                if (rowIdList.length > 0 && colIdList.length > 0) {
                  for (const rowId of rowIdList) {
                    for (const colId of colIdList) {
                      if (reference.Codes
                        .filter((code) => code.AttributeId === rowId || code.AttributeId === colId).length >= 2) return true;
                    }
                  }
                } else {
                  for (const code of reference.Codes) {
                    if (rowIdList.length === 0) {  // No row intersections to check for.
                      if (colIdList.indexOf(code.AttributeId) >= 0) return true;
                    } else if (colIdList.length === 0) {  // No column intersections to check for.
                      if (rowIdList.indexOf(code.AttributeId) >= 0) return true;
                    }
                  }
                }
  
                return false;
              });
  
            for (const reference of refMatches) {
              // Check all the filters.
              const parentFilters = filters.filter((item) => item.checked);
              let refMatchesFilter = parentFilters.length === 0;
  
              for (const parentFilter of parentFilters) {
                refMatchesFilter = false;
  
                for (const childFilter of parentFilter.children.filter((item) => item.checked)) {
                  const childFilterMatch = reference.Codes.filter((code) => code.AttributeId === childFilter.id).length > 0
  
                  if (childFilterMatch) {
                    refMatchesFilter = true;
                    break;
                  }
                }
  
                // if we do not match in the child filters, then we know it's not AND and we
                // can break.
                if (!refMatchesFilter) break;
              }
  
              // if we do not match all active parent filters then we do not count this.
              if (!refMatchesFilter) continue;
  
              references.push(reference);
            }
  
            return references;
          }
  
          /**
           * Builds the legend.
           */
          function buildLegend() {
            if (segmentAttributes === null) return;
  
            let legendHtml = '';
  
            segmentAttributes.forEach((segment) => {
              legendHtml += '<span class="dot" style="background-color: ' + segment.color + '"></span>' +
                '<span class="label">' + segment.attribute.AttributeName + '</span>'
            })
  
            $('.legend').html(legendHtml);
          }
  
          /**
           * Creates a pie png image as a data url.
           */
          function createPiePng(counts) {
            let currentPoint = 0;
            let conicGrad = '';
  
            for (const count of counts) {
              currentPoint += count.width;
              if (conicGrad.length > 0) conicGrad += ', ';
              conicGrad += count.color + ' 0 ' + currentPoint + '%';
            }
  
            if (currentPoint < 100) {
              if (conicGrad.length > 0) conicGrad += ', ';
              conicGrad += '#eeeeee 0';
            }
  
            const gradient = new ConicGradient({
              stops: conicGrad,
              size: 97
            });
  
            const png = gradient.png;
  
            // Clean up memory issues once we have our PNG.
            $(gradient.canvas).empty().remove();
            delete gradient.canvas;
  
            return png;
          }
  
          /**
           * Create the mosiac svg
           *
           * @param {Number} dimension
           * @param {Array} references
           */
          function createMosaic(dimension, references) {
            let x = 0;
            let y = 0;
  
            let html = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
     <defs>
     <pattern id="grid" width="${dimension}" height="${dimension}" patternUnits="userSpaceOnUse">
     <path d="M ${dimension} 0 L 0 0 0 ${dimension}" fill="none" stroke="white" stroke-width="0.5" />
     </pattern>
     </defs >
      <rect width="100%" height="100%" fill="url(#grid)" />`;
  
            for (const ref of references) {
              html += `<rect width="${dimension}" height="${dimension}" fill="${ref}" x="${x}" y="${y}" stroke="white" stroke-width="0.5" />`;
              x += dimension;
  
              if (x > 90) {
                x = 0;
                y += dimension
              }
            }
  
            html += '</svg >';
  
  
            return html;
          }
  
          /**
           * Creates the initial zero counts for the block.
           * @param rowId
           * @param colId
           */
          function createInitialCounts(rowId, colId) {
            let counts = [];
  
            if (segmentAttributes.length === 0) {
              counts.push({
                id: rowId + '-' + colId,
                attribute: null,
                color: '#1976d2',
                count: 0,
                width: 0,
                size: 0
              })
            } else {
              for (const segment of segmentAttributes) {
                counts.push({
                  id: segment.attribute.AttributeId,
                  attribute: segment.attribute,
                  color: segment.color,
                  count: 0,
                  width: 0,
                  size: 0
                })
              }
            }
  
            return counts
          }
  
          /**
           * Calculate the dimensions of the blocks that will go in the svg grid
           *
           * @param {Number} minRequiredBlocks minimum required mosiac tiles (equal to max number of references)
           * @param {Number} containerDimension dimensions of the container
           */
          function getBlockSize(minRequiredBlocks, containerDimension) {
            let number = Math.round(Math.sqrt(minRequiredBlocks));
            while (containerDimension % number != 0 && number < containerDimension) {
              number = number + 1;
            }
            return containerDimension / number;
          }
  
          /**
           * Updates all the reference counts and creates the visuals.
           */
          function updateReferenceCounts() {
            let maxCount = 0;
  
            // Remove old html and detach events.
            $('.cell', $pivotBody).off();
            $('.pie-wrapper').off().detach().remove();
            $('.data-wrapper').off().detach().remove();
  
            $('.cell', $pivotBody).each((index, cell) => {
              const $cell = $(cell);
              const colId = $cell.data('colid');
              const rowId = $cell.data('rowid');
              const references = GetFilteredReferences([rowId], [colId]);
              const counts = createInitialCounts(rowId, colId);
  
              let totalCount = 0;
  
              for (const reference of references) {
                for (const count of counts) {
                  if (count.attribute === null) {
                    totalCount += 1;
                    count.count += 1;
                    continue;
                  }
  
                  const countMatched = reference.Codes
                    .filter((code) => code.AttributeId === count.id).length > 0
                  if (countMatched) {
                    count.count += 1;
                    totalCount += 1;
                  }
                }
              }
  
              if (totalCount === 0) {
                $cell.addClass('none');
              } else {
                $cell.removeClass('none');
              }
  
              if (totalCount > maxCount) {
                maxCount = totalCount
              }
  
              for (const count of counts) {
                count.width = totalCount === 0 || count.count === 0 ? 0 : Math.round(count.count / totalCount * 100);
  
                // Check if the count is a sane amount to see, if not, make it the minimum.
                if (count.width < 4 && count.width !== 0) count.width = 4
              }
  
              $cell.data('totalSize', 0);
              $cell.data('totalCount', totalCount);
              $cell.data('counts', counts);
  
              let piePngStyle = '';
              if (counts.length > 0 && chartType === 'donut') {
                const png = createPiePng(counts);
  
                if (png.length > 0) {
                  piePngStyle = ' style="background-image: url(' + png + ')"';
                }
              }
  
              let dataWrapper = '<div class="pie-wrapper">' +
                '<div class="pie"' + piePngStyle + '></div>' +
                '<div class="pie-hole"></div>' +
                '</div>' +
                '<div class="mosaic-wrapper"></div>' +
                '<div class="data-wrapper">';
  
              for (const count of counts) {
                dataWrapper += '<div id="' + count.id + '" ' +
                  'class="data" ' +
                  'style="background-color: ' + count.color + ';"></div>';
              }
  
              dataWrapper += '</div>';
  
              $cell.html(dataWrapper);
            });
  
            // Update the size of the chart elements.
            $('.cell', $pivotBody).each((index, cell) => {
              const $cell = $(cell);
              const totalCount = $cell.data('totalCount');
              const counts = $cell.data('counts');
  
              for (const count of counts) {
                count.size = count.count === 0 ? 0 : Math.round(count.count / maxCount * 100);
              }
  
              const totalSize = totalCount === 0 ? 0 : Math.round(totalCount / maxCount * 100);
  
              $cell.data('counts', counts);
              $cell.data('totalSize', totalSize);
              $cell.data('maxCount', maxCount);
            });
  
            // Setup events.
            setupTooltips();
            handleTableClick();
          }
  
          /**
           * Switches between the bubble and heat-map views.
           */
          function updateTableDataView() {
            $('.cell', $pivotBody).each((index, cell) => {
              const $cell = $(cell);
              const counts = $cell.data('counts');
              const totalSize = $cell.data('totalSize');
              const totalWidth = $cell.data('totalWidth');
              const maxCount = $cell.data('maxCount');
              const blockSize = 100;
              const halfBlockSize = blockSize / 2;
  
              if (chartType === 'donut') {
                const circleSize = (blockSize * totalSize / 100);
                let holeSize = totalSize - (circleSize / blockSize * 24);
                if (holeSize < 0) holeSize = 0;
  
                $('.pie-wrapper', $cell).css({
                  'display': 'block'
                });
  
                $('.pie', $cell).css({
                  'width': circleSize + '%',
                  'height': circleSize + '%'
                });
  
                $('.pie-hole', $cell).css({
                  'width': holeSize + '%',
                  'height': holeSize + '%'
                });
  
                $('.data-wrapper', $cell).css({
                  'display': 'none'
                });
  
                $('.mosaic-wrapper', $cell).css({
                  'display': 'none'
                });
  
                return;
              } else {
                $('.pie-wrapper', $cell).css({
                  'display': 'none'
                });
  
                $('.mosaic-wrapper', $cell).css({
                  'display': 'none'
                });
  
                $('.data-wrapper', $cell).css({
                  'display': 'block'
                });
              }
              
              $('.data-wrapper', $cell).css({
                'display': chartType === 'heat' ? 'flex' : 'block',
                'opacity': chartType === 'heat' ? (totalSize / 100) : 1
              });
  
              if (chartType === 'mosaic') {
                $('.pie-wrapper', $cell).css({
                  'display': 'none'
                });
  
                $('.data-wrapper', $cell).css({
                  'display': 'none'
                });
  
                $('.mosaic-wrapper', $cell).css({
                  'display': 'block'
                });
  
                const dimension = getBlockSize(maxCount, 100);
  
                // Get colours from segments
                const referenceColours = counts.map(x => new Array(x.count).fill(x.color));
                const references = [].concat.apply([], referenceColours);
                let mosaic = createMosaic(dimension, references);
                $('.mosaic-wrapper', $cell).html(mosaic)
              }
  
  
              $('.data', $cell).css({
                'border-radius': chartType === 'heat' ? '0%' : '100%',
                'position': chartType === 'bubble' ? 'absolute' : 'relative'
              });
  
              for (const [index, count] of counts.entries()) {
                let size = blockSize * count.size / 100;
                // Check if the count is a sane amount to see, if not, make it the minimum.
                if (size < 4 && size !== 0) size = 4
                const halfSize = size / 2
  
                // calculate the middle.
                let transX = blockSize - halfBlockSize - halfSize;
                let transY = blockSize - halfBlockSize - halfSize;
                let diff = 0;
  
                if (size > halfBlockSize) {
                  diff = size - halfBlockSize;
                }
  
                // move count to it's quadrant.
                if (count.attribute !== null) {
                  if (index === 0) {  // move top left
                    transX -= halfSize - diff;
                    transY -= halfSize - diff;
                  } else if (index === 1) {  // move top right
                    transX += halfSize - diff;
                    transY -= halfSize - diff;
                  } else if (index === 2) {  // move bottom left
                    transX -= halfSize - diff;
                    transY += halfSize - diff;
                  } else if (index === 3) {  // move bottom right
                    transX += halfSize - diff;
                    transY += halfSize - diff;
                  }
                }
  
                $('#' + count.id, $cell).css({
                  'height': chartType === 'bubble' ? size + '%' : '100%',
                  'width': chartType === 'bubble' ? size + '%' : count.width + '%',
                  'transform': chartType === 'bubble' ? 'translate(' + transX + 'px, ' + transY + 'px)' : 'translate(0, 0)'
                });
              }
  
              setTimeout(function () {
                $('.data-wrapper', $cell).css({
                  'opacity': chartType === 'heat' ? totalWidth / 100 : 1
                });
              }, 500);
            });
          }
  
          /**
           * Cross browser functionality to request full screen access.
           * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API#Toggling_fullscreen_mode
           */
          function toggleFullScreen() {
            if (!document.fullscreenElement &&    // alternative standard method
              !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
  
          /**
           * Helper function to build the full table.
           */
          function buildTable() {
            buildTableColHead();
            buildTableRowHead();
            buildTableRows();
  
            // Update data in the table.
            updateReferenceCounts();
            updateTableDataView();
          }
  
          /**
           * Sets the filter state of the the given filter ID by either adding it or
           * removing it from a list of unchecked filter IDs.
           * @param checkFilters
           * @param filterId
           * @param klass
           */
          function setFilterState(checkFilters, filterId, klass) {
            for (const filter of checkFilters) {
              if (filterId === filter.id) {
                filter.checked = klass === 'checked' || klass === 'indeterminate';
              }
  
              if (filter.children.length > 0) {
                setFilterState(filter.children, filterId, klass)
              }
            }
          }
  
          /**
           * Updates the filter's parent node's state.
           * @param $target
           */
          function updateFilterParentNodeCheckedState($target) {
            let hasChecked = false;
            let hasUnchecked = false;
            let hasIndeterminate = false;
  
            $target.next().children().each(function () {
              const klass = $(this).attr('class');
  
              if (klass === 'checked') {
                hasChecked = true;
              } else if (klass === 'unchecked') {
                hasUnchecked = true;
              } else {
                hasIndeterminate = true;
              }
            })
  
            let klass = '';
  
            if (hasChecked && !hasUnchecked && !hasIndeterminate) {
              klass = 'checked'
            } else if (!hasChecked && hasUnchecked && !hasIndeterminate) {
              klass = 'unchecked'
            } else if ((hasChecked && hasUnchecked && !hasIndeterminate) ||
              (hasChecked && !hasUnchecked && hasIndeterminate) ||
              (!hasChecked && hasUnchecked && hasIndeterminate) ||
              (hasChecked && hasUnchecked && hasIndeterminate)) {
              klass = 'indeterminate'
            }
  
            if (klass.length > 0) {
              const filterId = $target.data('id');
              setFilterState(filters, filterId, klass);
  
              $target
                .removeClass($target.attr('class'))
                .addClass(klass);
            }
          }
  
          /**
           * Updates the filter's node state and calls it's children r
           * recursively.
           * @param $target
           * @param newKlass
           */
          function updateFilterNodeCheckedState($target, newKlass = '') {
            const klass = $target.attr('class');
  
            if (newKlass.length === 0) {
              if (klass === 'checked') {
                newKlass = 'unchecked';
              } else {
                newKlass = 'checked';
              }
            }
  
            const $next = $target.next();
  
            if ($next.is('ul')) {
              $next.children().each(function () {
                updateFilterNodeCheckedState($(this), newKlass);
              })
            }
  
            if ($target.is('li')) {
              const filterId = $target.data('id');
              setFilterState(filters, filterId, newKlass);
  
              $target
                .removeClass(klass)
                .addClass(newKlass);
  
              const $parent = $target.parent().prev();
              updateFilterParentNodeCheckedState($parent);
            }
          }
  
          /**
           * Update's the chartType and the checked state of the radios.
           * @param $filters
           * @param $target
           */
          function updateViewStyle($filters, $target) {
            const klass = $target.attr('class');
            if (klass === 'checked') return;
  
            chartType = $target.data('id');
  
            $('.style-wrapper li', $filters)
              .removeClass('checked')
              .addClass('unchecked');
            $target
              .removeClass('unchecked')
              .addClass('checked');
          }
  
          /**
           * Creates a filter node recursively.
           * @param filters
           * @returns {string}
           */
          function createFilterNode(filters) {
            let filterHtml = '<ul>';
  
            for (const filter of filters) {
              filterHtml += '<li class="unchecked" data-id="' + filter.id + '">' +
                checkboxCheckedSvg +
                checkboxUncheckedSvg +
                checkboxIndeterminateSvg +
                ' <span>' + filter.label + '</span></li>';
  
              if (filter.children.length > 0) filterHtml += createFilterNode(filter.children);
            }
  
            filterHtml += '</ul>';
            return filterHtml;
          }
  
          /**
           * Creates the elements for the settings panel and hooks up
           * the events.
           */
          function createSettingsPanel() {
            const $filters = $('.settings');
  
            let settingsHtml = '<div class="title clearfix">' +
              '<span>Filtros</span>' +
              '<a class="btnSettings right" id="close">X</a>' +
              '<a class="btnSettings left disabled" id="update">cargar</a>' +
              '</div>';
            settingsHtml += createFiltersPanel();
            // settingsHtml += createStylesPanel();
  
            $filters.html(settingsHtml);
  
            $('.filter-wrapper li', $filters).on('click', (e) => {
              updateFilterNodeCheckedState($(e.currentTarget));
              $('.disabled').removeClass('disabled');
              $('#update', $filters).on('click', handleUpdate);
            });
  
            $('.style-wrapper li', $filters).on('click', (e) => {
              updateViewStyle($filters, $(e.currentTarget));
              $('.disabled').removeClass('disabled');
              $('#update', $filters).on('click', handleUpdate);
            });
  
            $('.menu-settings').on('click', function () {
              $filters.addClass('open');
              $veil.addClass('open');
            });
  
            $('#close', $filters).on('click', function () {
              $filters.removeClass('open');
              $veil.removeClass('open');
            });
  
            function handleUpdate() {
              const $update = $(this);
              $update.addClass('busy');
  
              setTimeout(() => {
                updateReferenceCounts();
                updateTableDataView();
  
                $filters.removeClass('open');
                $veil.removeClass('open');
                $update.removeClass('busy')
                  .addClass('disabled');
                $update.off('click');
              }, 300);
            }
          }
  
          /**
           * Creates the filter section elements for the settings panel.
           * @returns {string}
           */
          function createFiltersPanel() {
            let filterHtml = '<div class="filter-wrapper">' +
              '<h2>Filters</h2>';
            filterHtml += createFilterNode(filters);
            filterHtml += '</div>';
  
            return filterHtml;
          }
  
          /**
           * Creates the style section elements for the settings panel.
           * @returns {string}
           */
          function createStylesPanel() {
            let styleHtml = '<div class="style-wrapper">' +
              '<h2>Style</h2>' +
              '<ul>' +
              '<li class="checked" data-id="bubble">' +
              radioCheckedSvg +
              radioUncheckedSvg +
              ' <span>Bubble-map</span>' +
              '</li>' +
              '<li class="unchecked" data-id="heat">' +
              radioCheckedSvg +
              radioUncheckedSvg +
              ' <span>Heat-map</span>' +
              '</li>' +
              '<li class="unchecked" data-id="mosaic">' +
              radioCheckedSvg +
              radioUncheckedSvg +
              ' <span>Mosiac</span>' +
              '</li>';
  
            if (segmentAttributes.length !== 0) {
              styleHtml += '<li class="unchecked" data-id="donut">' +
                radioCheckedSvg +
                radioUncheckedSvg +
                ' <span>Donut-map</span>' +
                '</li>';
            }
  
            styleHtml += '</ul>';
  
            return styleHtml;
          }
  
          /**
           * Creates the tooltip for the cell as it's hovered over.
           */
          function setupTooltips() {
            $('.cell').hover((e) => {
              // Hover.
              const $target = $(e.currentTarget);
              const totalCount = $target.data('totalCount');
  
              if (totalCount <= 0) {
                return
              }
  
              const counts = $target.data('counts');
  
              let tooltipHtml = '<div class="tooltip">';
  
              for (const count of counts) {
                if (count.count === 0) continue;
  
                let title = 'Study';
  
                if (count.count > 1) {
                  title = 'Studies';
                }
  
                if (count.attribute !== null) {
                  title = count.attribute.AttributeName
                }
  
                tooltipHtml += '<div class="count">' +
                  '<span style="background-color: ' + count.color + ';">' + count.count + '</span> ' +
                  title +
                  '</div>';
              }
  
              tooltipHtml += '</div>';
  
              $(tooltipHtml)
                .appendTo('body')
                .fadeIn('fast');
            }, (e) => {
              // Hover out.
              $('.tooltip').remove();
              delete $('.tooltip');
            }).mousemove((e) => {
              $('.tooltip')
                .css({
                  top: e.pageY + 10,
                  left: e.pageX + 10
                });
            });
          }
  
          /**
           * Creates the meta item in the reader for the reference key
           * passed in.
           * @param key
           * @param reference
           * @returns {string}
           */
          function createMetaItem(key, reference) {
            let metaItem = '';
            const renameKeys = {
              'ParentTitle': 'Journal'
            }
  
            if (key !== summaryAttribute && reference[key] !== undefined && reference[key].length > 0) {
              const tempKey = renameKeys[key];
              let label = '';
  
              if (tempKey !== undefined) label = tempKey;
              else label = key
  
              metaItem += '<div class="meta-data-item clearfix">';
              metaItem += '<label>' + label.replace(/([^A-Z])([A-Z])/g, '$1 $2') + '</label>';
              metaItem += '<span>' + reference[key] + '</span>';
              metaItem += '</div>'
            }
  
            return metaItem;
          }
  
          /**
           * Creates the elements to read a review.
           * @param refId
           */
          function selectReference(refId) {
            const references = referenceData.filter((reference) => {
              return reference.ItemId === refId;
            });
  
            if (references.length === 0) {
              $('.read').html('');
              return;
            }
  
            const reference = references[0];
            let refHtml = '<h2>' + reference.Title + '</h2>';
            refHtml += '<hr>';
  
            if (reference.Abstract !== undefined && reference.Abstract.length > 0) {
              refHtml += '<p>' + reference.Abstract + '</p>';
              refHtml += '<hr>';
            } else if (summaryAttribute.length > 0 && reference[summaryAttribute] !== undefined && reference[summaryAttribute].length > 0) {
              refHtml += '<p>' + reference[summaryAttribute] + '</p>';
              refHtml += '<hr>';
            }
  
            if (reference.URL !== undefined && reference.URL.length > 0) {
              refHtml += '<ol class="refs">';
              refHtml += '<li><a class="small" href="' + reference.URL + '" target="_blank">' + reference.URL + '</a></li>';
  
              if (reference.DOI === undefined || reference.DOI.length === 0) {
                refHtml += '</ol>';
                refHtml += '<hr>';
              }
            }
  
            if (reference.DOI !== undefined && reference.DOI.length > 0) {
              if (reference.URL === undefined || reference.URL.length === 0) {
                refHtml += '<ol class="refs">';
              }
  
              refHtml += '<li><a class="small" href="' + reference.DOI + '" target="_blank">' + reference.DOI + '</a></li>';
              refHtml += '</ol>';
              refHtml += '<hr>';
            }
  
            refHtml += '<div class="meta-data">';
            for (const key of metaProperties) {
              refHtml += createMetaItem(key, reference);
            }
            refHtml += '</div>';
  
            $('.read').html(refHtml);
          }
  
          /**
           * Updates the reader to show the newly filtered/changed references.
           * @param references
           */
          function updateReferenceReader(references) {
            $('.refMenuItem').off();
  
            references.sort(function (a, b) {
              if (a.Title > b.Title) return 1;
              else if (a.Title < b.Title) return -1;
              else return 0;
            });
  
            let title = '';
  
            if (references.length === 1) {
              title = references.length + ' Reference'
            } else {
              title = references.length + ' References'
            }
  
            let refsHtml = '<ul>';
  
            for (const ref of references) {
              let colors = [];
  
              for (const code of ref.Codes) {
                for (const segment of segmentAttributes) {
                  if (code.AttributeId === segment.attribute.AttributeId) {
                    colors.push(segment.color);
                  }
                }
              }
  
              refsHtml += '<li class="refMenuItem" data-refid="' + ref.ItemId + '">' +
                '<div class="title">' + ref.Title + '</div>' +
                '<div class="auth">' + ref.Authors + '</div>';
  
              refsHtml += '<div class="date">';
  
              if (ref.Month.length !== 0) {
                refsHtml += ref.Month + ', ';
              }
  
              refsHtml += ref.Year;
  
              for (let color of colors) {
                refsHtml += '<span class="refMenuItemLegend" style="background-color: ' + color + '" />';
              }
  
              refsHtml += '</div>';
              refsHtml += '</li>';
            }
  
            refsHtml += '</ul>';
  
            $('.title > span', $reader).html(title);
            $('.nav', $reader).html(refsHtml);
  
            $('.refMenuItem').on('click', (e) => {
              $('.refMenuItem').removeClass('selected');
  
              const $target = $(e.currentTarget);
              const refId = $target.data('refid');
  
              $target.addClass('selected');
              selectReference(refId);
            });
  
            if (references.length > 0) {
              $($('.refMenuItem')[0]).trigger('click');
            } else {
              selectReference(0);
            }
          }
  
          /**
           * Gets the reference code id's from the checked items in the reader
           * filter.
           * @returns {{rows: Array, cols: Array}}
           */
          function getReaderFilterSelection() {
            const colIdList = [];
            const rowIdList = [];
  
            $('.reader-filter .cols li').each((index, col) => {
              const $col = $(col);
              if ($col.attr('class') === 'checked') {
                colIdList.push($col.data('id'))
              }
            });
  
            $('.reader-filter .rows li').each((index, row) => {
              const $row = $(row);
              if ($row.attr('class') === 'checked') {
                rowIdList.push($row.data('id'))
              }
            });
  
            return {
              cols: colIdList,
              rows: rowIdList
            };
          }
  
          /**
           * Creates the reader selector HTML
           * @returns {string}
           */
          function buildReaderFilter(rowIdList, colIdList) {
            const readerTopFilter = csvData.rows[csvData.totalColDepth - 1]
            const readerSideFilter = []
  
            for (let i = csvData.totalColDepth; i < csvData.rows.length; i++) {
              const row = csvData.rows[i]
              readerSideFilter.push(row[row.length - 1])
            }
  
            let colParent = readerTopFilter.length === colIdList.length ? 'checked' : 'indeterminate';
            if (colIdList.length === 0) colParent = 'unchecked';
  
            let html = '<div class="reader-filter">' +
              '<ul>' +
              '<li class="' + colParent + '" data-parent="true" title="' + csvData.rows[0][0].title + '">' +
              checkboxCheckedSvg +
              checkboxUncheckedSvg +
              checkboxIndeterminateSvg +
              ' <span>' + csvData.rows[0][0].title + '</span>' +
              '</li>' +
              '<ul class="cols">';
  
            for (const item of readerTopFilter) {
              const state = colIdList.indexOf(item.id) >= 0 ? 'checked' : 'unchecked';
              html += '<li class="' + state + '" data-id="' + item.id + '" data-parent="false" title="' + item.title + '">' +
                checkboxCheckedSvg +
                checkboxUncheckedSvg +
                checkboxIndeterminateSvg +
                ' <span>' + item.title + '</span>' +
                '</li>';
            }
  
            let rowParent = readerSideFilter.length === rowIdList.length ? 'checked' : 'indeterminate';
            if (rowIdList.length === 0) rowParent = 'unchecked';
  
            html += '</ul>';
            html += '<li class="' + rowParent + '" data-parent="true" title="' + csvData.rows[csvData.totalColDepth][0].title + '">' +
              checkboxCheckedSvg +
              checkboxUncheckedSvg +
              checkboxIndeterminateSvg +
              ' <span>' + csvData.rows[csvData.totalColDepth][0].title + '</span>' +
              '</li>';
            html += '<ul class="rows">';
  
            for (const item of readerSideFilter) {
              const state = rowIdList.indexOf(item.id) >= 0 ? 'checked' : 'unchecked';
              html += '<li class="' + state + '" data-id="' + item.id + '" data-parent="false" title="' + item.title + '">' +
                checkboxCheckedSvg +
                checkboxUncheckedSvg +
                checkboxIndeterminateSvg +
                ' <span>' + item.title + '</span>' +
                '</li>';
            }
  
            html += '</ul>';
            html += '</ul>';
            html += '</div>';
            return html
          }
  
          /**
           * Builds the reference reader.
           * @param selectedRowIds
           * @param selectedColIds
           */
          function buildReferenceReader(selectedRowIds, selectedColIds) {
            let readerHtml = '<div class="title clearfix">' +
              '<a class="close">X</a> <span></span>' +
              '<input type="text" placeholder="Filter" class="reader-filter">' +
              '</div>' +
              '<div class="content">' +
              buildReaderFilter(selectedRowIds, selectedColIds) +
              '<div class="nav"></div>' +
              '<div class="read"></div>' +
              '</div>';
  
            $reader.html(readerHtml);
          }
  
          /**
           * Shows the reader for the given row and column id lists.
           * @param rowIdList
           * @param colIdList
           */
          function toggleReader(rowIdList, colIdList) {
            const references = GetFilteredReferences(rowIdList, colIdList);
            buildReferenceReader(rowIdList, colIdList);
            updateReferenceReader(references);
            const $readerFilter = $('.reader-filter');
  
            $readerFilter.bind('keyup change', (e) => {
              const search = $readerFilter.val().toLowerCase().trim();
              const $refMenuItem = $('.refMenuItem');
              $refMenuItem.removeClass('hide');
  
              if (search.length <= 0) {
                return;
              }
  
              $refMenuItem
                .filter((index, item) => {
                  return $('.title', item).text().toLowerCase().indexOf(search) < 0;
                })
                .addClass('hide');
            });
  
            $('.reader-filter li').on('click', (e) => {
              const $target = $(e.currentTarget);
              const klass = $target.attr('class');
              const isParent = $target.data('parent');
              const newKlass = klass === 'checked' ? 'unchecked' : 'checked';
  
              $target
                .removeClass(klass)
                .addClass(newKlass);
  
              if (isParent) {
                $target.next().children().each((index, child) => {
                  $(child)
                    .removeClass('checked')
                    .removeClass('unchecked')
                    .addClass(newKlass);
                });
              } else {
                const parent = $target.parent().prev();
                $(parent)
                  .removeClass('checked')
                  .removeClass('unchecked')
                  .addClass('indeterminate');
              }
  
              const newSelection = getReaderFilterSelection();
              const references = GetFilteredReferences(newSelection.rows, newSelection.cols);
  
              updateReferenceReader(references);
            });
  
            $('.close', $reader).on('click', () => {
              $('.refMenuItem').off();
              $('.reader-filter li').off();
              $reader.removeClass('open');
              $veil.removeClass('open');
            });
  
            $veil.addClass('open');
            $reader.addClass('open');
          }
  
          /**
           * Handles the table click to show the reader dialog.
           */
          function handleTableClick() {
            $('.clickable-row').on('click', (e) => {
              const $target = $(e.currentTarget);
              const rowId = $target.data('id');
  
              toggleReader([rowId], []);
            });
  
            $('.clickable-col').on('click', (e) => {
              const $target = $(e.currentTarget);
              const colId = $target.data('id');
  
              toggleReader([], [colId]);
            });
  
            $('.cell').on('click', (e) => {
              const $target = $(e.currentTarget);
              const totalCount = $target.data('totalCount');
              const colId = $target.data('colid');
              const rowId = $target.data('rowid');
  
              if (totalCount === 0) {
                return;
              }
  
              toggleReader([rowId], [colId]);
            });
          }
  
          /**
           *  handle the about button click to show the about map reader dialog
           */
          function handleAboutClick() {
            $('.menu-about').on('click', e => {
              let aboutHtml = '<div class="title clearfix">' +
                '<a class="close">X</a> <span>About This Map</span>' +
                '</div>' +
                '<div class="content">' +
                '<div class="read">' + about + '</div>' +
                '</div>';
  
              $reader.html(aboutHtml);
  
              $('.close', $reader).on('click', () => {
                $reader.removeClass('open');
                $veil.removeClass('open');
              });
  
              $veil.addClass('open');
              $reader.addClass('open');
            });
          }
  
          function handleSubmitStudyClick() {
            $('.menu-submitStudy').on('click', e => {
              let submitStudyHtml = '<div class="title clearfix">' +
                '<a class="close">X</a> <span>Submit a study</span>' +
                '</div>' +
                '<div class="content">' +
                '<div class="read">' + submitStudy + '</div>' +
                '</div>';

  
  
              $reader.html(submitStudyHtml);
  
              $('.close', $reader).on('click', () => {
                $reader.removeClass('open');
                $veil.removeClass('open');
              });
  
              $veil.addClass('open');
              $reader.addClass('open');
            });
          }
  
          /**
           * Makes the headers hide/show.
           */
          function handleExpandClick() {
            const $menuExpand = $('.menu-expand');
            const $topTable = $('table', $topHead);
            const $sideTable = $('table', $sideHead);
  
            $menuExpand.on('click', e => {
              $menuExpand.toggleClass('active');
  
              if ($menuExpand.hasClass('active')) {
                $topTable.height('auto');
                $sideTable.width('auto');
              } else {
                $topTable.height(topColHeight);
                $sideTable.width(sideColWidth);
              }
  
              $('.header, .header-can-hide').slideToggle(200, function () {
                adjustTable();
              });
            });
          }
  
          /**
           * Toggles fullscreen mode.
           */
          function handleFullscreenClick() {
            const $menuFullscreen = $('.menu-fullscreen');
  
            $menuFullscreen.on('click', e => {
              toggleFullScreen();
              $menuFullscreen.toggleClass('active');
            });
          }
  
  
  
          /**
           * Toggles fullscreen mode.
           */
          function handleReaderClick() {
            const $menuReader = $('.menu-reader');
  
            const colIdList = csvData.rows[csvData.totalColDepth - 1].map(item => item.id)
            const rowIdList = []
  
            for (let i = csvData.totalColDepth; i < csvData.rows.length; i++) {
              const row = csvData.rows[i]
              rowIdList.push(row[row.length - 1].id)
            }
  
            $menuReader.on('click', e => {
              toggleReader(rowIdList, colIdList);
              $menuReader.toggleClass('active');
            });
          }
  
          /**
           * Toggles the column collapse.
           * @param miss
           * @param count
           */
          function toggleTopColCollapse(miss, count) {
            const max = miss + count;
  
            $('.top-head tr').each((rowIndex, row) => {
              if (rowIndex <= 1) return;
              let total = 0;
  
              $(row).children().each((colIndex, cell) => {
                const $cell = $(cell);
                const colSpan = parseInt($cell.attr('colspan'));
                total += colSpan;
  
                if (total > miss && total <= max) {
                  $cell.toggleClass('collapsed')
                } else if (total > max) {
                  return false;
                }
              });
            });
  
            $('.body tr').each((rowIndex, row) => {
              let total = 0;
  
              $(row).children().each((colIndex, cell) => {
                const $cell = $(cell);
                total += 1;
  
                if (total > miss && total <= max) {
                  $cell.toggleClass('collapsed-col')
                } else if (total > max) {
                  return false;
                }
              });
            });
          }
  
          /**
           * Toggles the row collapse.
           * @param miss
           * @param count
           */
          function toggleSideColCollapse(miss, count) {
            const max = miss + count;
            console.warn('miss', miss, 'max', max);
            let total = 0;
  
            $('.level-2').each((index, cell) => {
              const $cell = $(cell);
              const rowSpan = parseInt($cell.attr('rowspan'));
              total += rowSpan;
  
              if (total > miss && total <= max) {
                $cell.toggleClass('collapsed')
              } else if (total > max) {
                return false;
              }
            });
  
            total = 0;
  
            $('.level-3').each((index, cell) => {
              const $cell = $(cell);
              const rowSpan = parseInt($cell.attr('rowspan'));
              total += rowSpan;
  
              if (total > miss && total <= max) {
                $cell.toggleClass('collapsed')
              } else if (total > max) {
                return false;
              }
            });
  
            $('.body tr').each((rowIndex, row) => {
              if (rowIndex < miss || rowIndex >= max) return;
              console.warn('rowIndex', rowIndex);
  
              $(row).children().each((colIndex, cell) => {
                $(cell).toggleClass('collapsed-row');
              });
            });
          }
  
          /**
           * Toggles collapsing columns and rows.
           */
          function handleTableRowColCollapse() {
            // Manage column collapse.
            $('.btnColCollapse').on('click', e => {
              const $target = $(e.currentTarget);
              const $cell = $target.parent().parent();
              $cell.toggleClass('collapsed');
  
              const count = parseInt($cell.attr('colspan'));
              let miss = 0;
  
              let $prev = $cell.prev();
  
              while ($prev.length > 0) {
                try {
                  miss += parseInt($prev.attr('colspan'))
                  $prev = $prev.prev();
                }
                catch (e) {
                  break;
                }
              }
  
              if (count > 0) {
                toggleTopColCollapse(miss, count);
              }
            });
  
            // Manage row collapse.
            $('.btnRowCollapse').on('click', e => {
              const $target = $(e.currentTarget);
              const $cell = $target.parent().parent();
              $cell.toggleClass('collapsed');
  
              const count = parseInt($cell.attr('rowspan'));
              let miss = 0;
  
              $('.level-1').each((index, cell) => {
                const $otherCell = $(cell);
  
                if ($otherCell.text() !== $cell.text()) {
                  miss += parseInt($otherCell.attr('rowspan'));
                } else {
                  return false;
                }
              })
  
              if (count > 0) {
                toggleSideColCollapse(miss, count);
              }
            });
          }
  
          /**
           * Adjusts the table as the window is resized.
           */
          function adjustTable() {
            const bodyWidth = $pivotTable.width() - $sideHead.width();
            const topHeadWrapperCssHeight = $topHead.height();
            const topHeadWrapperCssPaddingLeft = $sideHead.width();
            const topHeadCssWidth = bodyWidth;
            const bodyCssWidth = bodyWidth - 1;
            let sideHeadCssHeight = $window.height() - $topHead.height() - $footer.height() - $menu.height() - 100;
            let bodyCssHeight = sideHeadCssHeight - 200;
  
            $header = $('.header')
  
            if ($header.length > 0 && $header.css('display') !== 'none') {
              sideHeadCssHeight = sideHeadCssHeight - $header.height() - 280;
              bodyCssHeight = sideHeadCssHeight;
            }
  
            $topHeadWrapper.css({
              'height': topHeadWrapperCssHeight,
              'padding-left': topHeadWrapperCssPaddingLeft
            });
  
            $topHead.css({
              'width': topHeadCssWidth
            });
  
            $topHeadTable.css({
              'margin-left': '0px'
            });
  
            $sideHead.css({
              'height': sideHeadCssHeight
            });
  
            $sideHeadTable.css({
              'margin-top': '0px'
            });
  
            $pivotBody.css({
              overflow: 'scroll',
              width: bodyCssWidth,
              height: bodyCssHeight
            });
  
            $pivotBody.scroll(function (e) {
              $topHeadTable.css({
                'margin-left': e.target.scrollLeft * -1
              });
  
              $sideHeadTable.css({
                'margin-top': e.target.scrollTop * -1
              });
            });
          }
  
          // Call all the methods to initialize the page.
          createSettingsPanel();
          buildTable();
          adjustTable();
          buildLegend();
          handleExpandClick();
          handleFullscreenClick();
          handleReaderClick();
          handleTableRowColCollapse();
  
          if (about.trim().length === 0) {
            $('.menu-about').hide();
          }
          else {
            handleAboutClick();
          }
  
          if (submitStudy.trim().length === 0) {
            $('.menu-submitStudy').hide();
          }
          else {
            handleSubmitStudyClick();
          }
  
          // Show the loader.
          const $loader = $('.loader');
          const windowHeight = $window.height() + 200;
  
          $window.resize(adjustTable);
  
          // Slide the up after all is done.
          $loader
            .css({
              'top': -windowHeight,
              'bottom': windowHeight
            });
  
          // Removes the loader after the animation is complete.
          setTimeout(() => {
            $loader.remove();
          }, 2000);
        });
      });
    });
  });
  