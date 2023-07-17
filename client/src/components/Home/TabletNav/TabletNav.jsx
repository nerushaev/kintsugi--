import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../hooks/useAuth";
import { theme } from "../../../styles/theme";
import Logo from "../Logo/Logo";

const TabletNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  font-size: ${theme.fontSizes.extraLarge};
`;

const NavigationList = styled.ul`
  display: flex;
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export default function TabletNav() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <TabletNavigation>
        <Logo className={"nav-logo"} />
        <NavigationList>
          <NavigationItem>
            <Link to="/">Головна</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/delivery">Оплата та доставка</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/about">Про нас</Link>
          </NavigationItem>
          {!isLoggedIn ? (
            <>
              <NavigationItem>
                <Link to="/register">Реєстрація</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/login">Вхід</Link>
              </NavigationItem>
            </>
          ) : (
            <NavigationItem>
              <Link to="/user">Кабінет</Link>
            </NavigationItem>
          )}
        </NavigationList>
      </TabletNavigation>
    </div>
  );
}
