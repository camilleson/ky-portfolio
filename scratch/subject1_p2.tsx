      {/* =========================================================
                             PAGE 1 - 2
          ========================================================= */}
      <div className="adsp-page" style={{marginTop: '2rem'}}>
        <div className="adsp-content">
          {/* Page 1-2 Left Column */}
          <div className="adsp-col">
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">빅데이터 : 대용량 데이터를 활용하여 새로운 통찰 및 가치를 생산</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', marginBottom: '0.5rem'}}>
                <li className="bullet-none">
                  <span className="font-bold">3V</span> : Volume (데이터 양 ↑), Variety (정형 + 비정형 + 반정형), Velocity (빠른 속도)
                </li>
                <li className="bullet-none">
                  <span className="font-bold">4V</span> : 3V + <span className="highlight-text">Value</span> (빅데이터 4번째 V, <span style={{textDecoration: 'underline'}}>ROI</span>) ← 비즈니스 효과 관점
                  <div className="text-small blue-text" style={{marginLeft: '2rem'}}>Return On Investment, 투자 대비 수익율</div>
                </li>
              </ul>
              <div className="text-small" style={{marginTop: '0.5rem', color: '#555'}}>
                - 사전 처리 → <span className="highlight-text">사후 처리</span> / 표본조사 → <span className="highlight-text">전수 조사</span> / 질 → <span className="highlight-text">양</span> / 인과관계 → <span className="highlight-text">상관관계</span>
              </div>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 기억 용량 단위</div>
              <div className="text-small">
                KB (2<sup>10</sup>, 10<sup>3</sup>) → MB (2<sup>20</sup>, 10<sup>6</sup>) → GB (2<sup>30</sup>, 10<sup>9</sup>) → TB (2<sup>40</sup>, 10<sup>12</sup>)<br/>
                → PB (2<sup>50</sup>, 10<sup>15</sup>) → EB (2<sup>60</sup>, 10<sup>18</sup>) → ZB (2<sup>70</sup>, 10<sup>21</sup>) → YB (2<sup>80</sup>, 10<sup>24</sup>)
              </div>
            </div>

            <div className="adsp-section" style={{marginTop: '1rem'}}>
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 자료 구성 단위</div>
              <div className="text-small">
                - Bit → Nibble (4Bit) → Byte (8Bit) → Word (명령 단위) → Field → Record<br/>
                <span style={{display: 'inline-block', width: '100%', textAlign: 'right'}}>→ File → DB</span>
              </div>
              <div className="text-small" style={{marginTop: '0.5rem'}}>
                ※ 1Bit = 데이터 최소 단위 (이진수 하나)<br/>
                <span style={{marginLeft: '1rem'}}>1Byte = 숫자, 영어, 공백, 특수문자 (반각문자) / 2Byte = 한글, 한자(전각문자)</span>
              </div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">빅데이터 출현 배경</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">- 소셜 미디어(SNS), 영상 등 <span className="blue-text">비정형 데이터 확산</span>, <span className="blue-text">저장 처리 장치 가격 하락</span></li>
                <li className="bullet-none">- <span className="highlight-text">클라우드 컴퓨팅</span>(분산 병렬처리로 처리 비용 감소), 인터넷 보급, 디지털화</li>
                <li className="bullet-none">- 인간 게놈 프로젝트 / <span style={{textDecoration: 'underline'}}>양질 전환 법칙</span> / IoT 확산</li>
                <li className="bullet-none text-small blue-text" style={{marginLeft: '1rem'}}>데이터의 양적 누적이 질적 비약으로 변환</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">빅데이터에 거는 기대 (비유적 표현)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">- <span className="blue-text font-bold">철/석탄</span>(1차 → 2차 산업혁명의 핵심 재료), <span className="blue-text font-bold">원유</span>(주요 에너지원)</li>
                <li className="bullet-none">- <span className="blue-text font-bold">렌즈</span>(생물학에서 현미경 렌즈의 중요성), <span className="blue-text font-bold">플랫폼</span>(공동 활용 목적의 유/무형 구조물)</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">빅데이터의 어려운 가치 산정</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">- 데이터의 활용 방식이 다양해지면서 특정 데이터의 활용 시점/장소/대상 불분명</li>
                <li className="bullet-none">- 새로운 분석 기술의 적용으로 가치가 없던 데이터가 나중에는 가치 창출될 수 있음</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">빅데이터 활용 방법</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5', width: '30%'}}>연관 규칙 학습</th>
                    <td>. 데이터 변수 간 의미있는 상관관계(연관 규칙) 발견<br/>ex. 기저귀 구매와 맥주 구매 간 상관성</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>유형 분석</th>
                    <td>. 사용자의 특성(유형)에 맞게 그룹 및 범주를 나누어 분류</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>유전 알고리즘</th>
                    <td>. 최적화 필요한 문제 해결을 자연선택, 돌연변이와 같은<br/>메커니즘을 통해 점진적으로 진화</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>기계 학습</th>
                    <td>. 훈련 데이터로부터 패턴을 파악해 예측 (넷플릭스 추천 영상)</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>회귀 분석</th>
                    <td>. 선형 함수로 나타낼 수 있는 수치데이터 분석</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>감정 분석</th>
                    <td>. 글쓴이의 감정 분석 / 고객이 원하는 것을 찾아낼 때 활용<br/>고객의 후기를 받아 서비스 개선에 활용</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>소셜 네트워크 분석</th>
                    <td>. 영향력 있는 사람을 찾아 사람들 간의 소셜 관계를 파악</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">빅데이터 위기 요인 : <span style={{fontWeight: 'normal', fontSize: '1rem'}}>사생활 침해 / 책임 원칙 훼손 / 데이터 오용</span></div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '25%'}}>사생활 침해</th>
                    <td>. 개인 정보가 n차 가공되어 공유 / <span className="highlight-text">익명화 기술로는 해결 불충분</span><br/>→ 동의제에서 <span className="blue-text font-bold">책임제</span>로 전환 (개인 정보 사용자에게 책임 부여)</td>
                  </tr>
                  <tr>
                    <th className="bg-green">책임 원칙<br/>훼손</th>
                    <td>. 빅데이터 예측 기반 잠재적 위험 감지 후 책임 추궁<br/>(ex. 실제 범행 전 용의자 사전 체포 / 개인 신용도 무관 대출 거절)<br/>→ <span className="highlight-text">기존 책임 원칙 강화 (결과 기반 책임 원칙)</span></td>
                  </tr>
                  <tr>
                    <th className="bg-green">데이터 오용</th>
                    <td>. 빅데이터 기반 분석이 항상 맞는 결과를 제공하진 않음<br/>→ <span className="blue-text font-bold">데이터 알고리즘 접근권 허용</span> 및 객관적 인증방안 도입<br/>'알고리즈미스트(Algorithmist)' 도입</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section" style={{marginTop: '1rem'}}>
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 개인 정보 비식별화 방법</div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 가명 처리 / 총계 처리 (개인 점수 → 그룹 평균) / 데이터 값 부분 및 전체 삭제<br/>
                / 데이터 범주화 (27세 → 20대) / 데이터 마스킹 (주민번호 : 980402-2******)
              </div>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 2 -</div>
          </div>

          {/* Page 1-2 Right Column */}
          <div className="adsp-col">
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">가치 패러다임의 변화 : <span className="blue-text" style={{textDecoration: 'underline'}}>Digitalization</span> ▶ <span className="blue-text" style={{textDecoration: 'underline'}}>Connection</span> ▶ <span className="blue-text" style={{textDecoration: 'underline'}}>Agency</span></div>
              <div className="text-small" style={{display: 'flex', justifyContent: 'space-between', padding: '0 1rem', color: '#1565c0'}}>
                <span>(아날로그 → 디지털)</span>
                <span>(디지털 정보 간 연결)</span>
                <span>(효율/효과적인 연결 지향)</span>
              </div>
              <ul className="adsp-ul" style={{marginTop: '1rem', marginLeft: '0.5rem'}}>
                <li className="bullet-none">- 일차적 분석: 큰 변화에 대응하거나 고객 환경의 변화 파악, 새로운 기회 포착 어려움</li>
                <li className="bullet-none">- <span style={{textDecoration: 'underline'}}>전략도출 가치기반 분석</span>: 전략적 통찰력 창출을 통해 기회 발굴</li>
                <li className="bullet-none text-right text-small" style={{color: '#555', marginTop: '0.2rem'}}>주요 경영진의 지원 확보 / 넓은 활용 범위 / 전략적인 변화</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터 사이언스</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">- 정형/반정형/비정형 등 다양한 형태의 데이터에서 의미/가치를 추출</li>
                <li className="bullet-none">- 총체적(holistic) 접근법 사용 : 수학/통계학/컴퓨터 공학/데이터 공학 등</li>
                <li className="bullet-none">- <span className="blue-text font-bold">데이터 분석가</span> : 분석 보고서 및 시각화 자료 작성 → 데이터 기반 의사 결정 추구</li>
              </ul>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">데이터 사이언티스트 : <span style={{fontWeight: 'normal', fontSize: '1rem'}}>머신 러닝 및 AI 활용을 위한 코딩 스킬, 통계적 지식 필요</span></div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">+ <span className="font-bold">하드 스킬</span> : Machine Learning + Modeling + Data Technical Skill (이론 지식)</li>
                <li className="bullet-none">+ <span className="font-bold">소프트 스킬</span> : 창의적 사고, 스토리텔링, 시각화, 커뮤니케이션 (고객 공감 능력)</li>
                <li className="bullet-none" style={{textAlign: 'center', marginTop: '0.2rem'}}>→ 통찰력 있는 분석 능력</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 가트너(Gartner)가 주장한 데이터 사이언티스트의 역량</div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 데이터 관리, 분석 모델링, 비즈니스 분석, 소프트 스킬 (<span className="highlight-text">하드 스킬 제외</span>)
              </div>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 효과적인 분석모델 개발 위한 요구사항 (인문학적 요소)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">- 분석 모델이 <span className="highlight-text">예측할 수 없는 위험 요소</span>를 지속적으로 판단</li>
                <li className="bullet-none">- 모델 능력에 항상 <span className="highlight-text">의구심</span>을 가지며, <span style={{textDecoration: 'underline'}}>분석 모델의 한계</span>에 대해 끊임없이 고찰</li>
                <li className="bullet-none">- 모델 범위 바깥의 외부 요인은 판단하지 않음 <span className="text-small blue-text" style={{float: 'right'}}>(가정과 현실의 불일치)</span></li>
              </ul>
              
              <div style={{marginTop: '1rem'}}>
                <div style={{fontWeight: 'bold'}}>▶ 과학 기반의 정량 분석 + 인문학적 통찰 기반 합리적 추론</div>
                <div className="text-small" style={{marginLeft: '1.2rem', marginTop: '0.2rem'}}>
                  (과거: 모델링, 실험설계 / 현재 : 차선 행동 / 미래 : 예측, 최적화)<br/>
                  → '인과관계'가 아닌 '<span style={{textDecoration: 'underline'}}>상관관계</span>' 분석 기반 인사이트 중요도 높아짐
                </div>
              </div>

              <div style={{marginTop: '1rem'}}>
                <div style={{fontWeight: 'bold'}}>▶ 사회경제적 변화 : 단순 세계 → 복잡 세계 (다양성, 연결성, 창조성)</div>
                <div className="text-small" style={{display: 'flex', marginTop: '0.2rem'}}>
                  <div style={{color: '#1565c0', width: '80px'}}>(인문학 열풍)</div>
                  <div>
                    비즈니스 중심의 제품 생산 → 서비스 중심<br/>
                    경제 및 산업 논리의 생산 → 시장 창조 (무형 자산)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
